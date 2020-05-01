import { Request as FakeRequest, Response as FakeResponse } from "miragejs";

export default function () {
  this.get(
    "contacts",
    (schema, request: FakeRequest) => {
      return schema.contacts.all();
    },
    {
      timing: 2000,
    }
  );
}
