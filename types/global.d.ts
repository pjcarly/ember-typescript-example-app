// Types for compiled templates
declare module "typescript-example-app/templates/*" {
  import { TemplateFactory } from "htmlbars-inline-precompile";
  const tmpl: TemplateFactory;
  export default tmpl;
}
