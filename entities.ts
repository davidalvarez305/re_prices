import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  zpid: string;

  @Column({ nullable: true, type: "numeric", precision: 3, scale: 1 })
  beds: number

  @Column({ nullable: true, type: "numeric", precision: 3, scale: 1 })
  bathrooms: number

  @Column({ nullable: true, type: "numeric", precision: 16, scale: 10 })
  sqft: number;

  @Column({ nullable: true, type: "numeric", precision: 16, scale: 10 })
  latitude: number

  @Column({ nullable: true, type: "numeric", precision: 16, scale: 10 })
  longitude: number

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

  @Column({ nullable: true })
  photos: string;

  @Column()
  detailsUrl: string;

  @ManyToOne(() => PropertyType, (property) => property.type)
  property_type: PropertyType;

  @OneToMany(() => Entry, (entry) => entry.property)
  entries: Entry[];
}

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  dateCrawled: number;

  @Column({ type: "decimal", precision: 16, scale: 2 })
  price: number;

  @Column({ nullable: true, type: 'bigint' })
  datePriceChanged: number;

  @ManyToOne(() => ListingStatus, (status) => status.status)
  listing_status: ListingStatus;

  @Column({ nullable: true, type: "decimal", precision: 16, scale: 2 })
  price_cut: number;

  @ManyToOne(() => Property, (property) => property.entries)
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
