import { generateReactHelpers } from 
npm;
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();