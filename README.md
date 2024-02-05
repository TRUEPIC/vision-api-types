# Vision API Types

This is a collection of types for the Vision API. It is intended to
be used in conjunction with the Vision API client libraries.

## Updating Types

The files in this directory are just copied from the types directory
in `vision-api`.  If you are going to update the types, copy the `src/types`
directory from `vision-api` to this directory. You then need to
change all of the imports are relative. Then run the following
command:
    
```sh
npm run build
```