export const DB_PACKAGE_STATUS = "foundation_only" as const;

export interface DbPackageMetadata {
  packageName: "@shipwrecked/db";
  status: typeof DB_PACKAGE_STATUS;
  schemaImplemented: false;
  migrationsImplemented: false;
  connectionImplemented: false;
}

export const dbPackageMetadata: DbPackageMetadata = {
  packageName: "@shipwrecked/db",
  status: DB_PACKAGE_STATUS,
  schemaImplemented: false,
  migrationsImplemented: false,
  connectionImplemented: false
};
