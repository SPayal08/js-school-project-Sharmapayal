/// <reference types="vite/client" />

// let TS accept CSS imports
declare module "*.css";

// (optional) if you use images:
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.webp";
declare module "*.avif";

// (optional) if you import JSON manually (Vite actually supports this natively)
declare module "*.json";
