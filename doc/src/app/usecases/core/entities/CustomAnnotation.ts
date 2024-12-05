import "reflect-metadata";

const decoratorMetadataKey = Symbol("CustomAnnotation");

export function CustomAnnotation(formatString: string | null = null) {
  return Reflect.metadata(decoratorMetadataKey, formatString);
}

export function getCustomAnnotation(target: any, propertyKey: string) {
  return Reflect.getMetadata(decoratorMetadataKey, target, propertyKey);
}
