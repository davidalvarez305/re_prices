import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zpid: string;

  @Column({ nullable: true })
  beds: number | null;

  @Column({ nullable: true })
  bathrooms: number | null;

  @Column({ nullable: true })
  sqft: number | null;

  @Column({ nullable: true })
  latitude: number | null;

  @Column({ nullable: true })
  longitude: number | null;

  @Column()
  address_line_one: string;

  @Column({ nullable: true })
  address_line_two?: string;

  @Column()
  zip_code: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column(() => PropertyType)
  property_type: PropertyType;

  @OneToMany(() => Entry, (entry) => entry.property)
  entries: Entry[];
}

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateCrawled: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column()
  datePriceChanged: number;

  @Column(() => ListingStatus)
  listing_status: ListingStatus;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price_cut: number;

  @Column(() => Property)
  property: Property;
}

@Entity()
export class PropertyType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}

@Entity()
export class ListingStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;
}
