import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import GeoService from "typescript-example-app/services/geo";
import ContactModel from "typescript-example-app/models/contact";

export default class ContactViewComponent extends Component {
  @service geo!: GeoService;

  contact!: ContactModel;
}
