import RESTSerializer from "@ember-data/serializer/rest";

export default class ApplicationSerializer extends RESTSerializer {
  modelNameFromPayloadKey(payloadKey) {
    if (payloadKey == "results") {
      return super.modelNameFromPayloadKey("movie");
    } else {
      return super.modelNameFromPayloadKey(payloadKey);
    }
  }
}
