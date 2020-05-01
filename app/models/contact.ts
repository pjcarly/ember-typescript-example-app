import DS from "ember-data";
import AddressInterface from "typescript-example-app/interfaces/address";

export default class ContactModel extends DS.Model {
  @DS.attr()
  firstName!: string;

  @DS.attr()
  lastName!: string;

  @DS.attr()
  address!: AddressInterface;
}
