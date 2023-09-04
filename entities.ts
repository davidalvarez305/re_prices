import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column()
  beds: number;

  @Column()
  bathrooms: number;

  @Column()
  sqft: number;

  @Column(() => Address)
  address: Address;

  @Column(() => PropertyType)
  property_type: PropertyType;

  @Column(() => ListingStatus)
  listing_status: ListingStatus;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price_cut: number;
}

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => City, (city) => city.state)
  cities: City[];
}

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => State, (state) => state.cities)
  state: State;

  @OneToMany(() => ZipCode, (zipCode) => zipCode.city)
  zipCodes: ZipCode[];
}

@Entity()
export class ZipCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zip_code: string;

  @ManyToOne(() => City, (city) => city.zipCodes)
  city: City;
}

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address_line_one: string;

  @OneToOne(() => ZipCode)
  zip_code: ZipCode;
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
