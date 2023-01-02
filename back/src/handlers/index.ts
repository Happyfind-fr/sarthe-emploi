export { default as User } from './user';
export { default as Offer } from './offer';
export { default as Token } from './tokens';
export { default as Company } from './company';
// import fs from 'fs';

// function generateExports(dir1:string, dir2:string) {
//     const exports: string[] = [];
  
//     const files1 = fs.readdirSync(dir1);
//     for (const file of files1) {
//       exports.push(`export { default as ${file.replace('.js', '')} } from './${dir1}/${file}';`);
//     }
  
//     const files2 = fs.readdirSync(dir2);
//     for (const file of files2) {
//       exports.push(`export { default as ${file.replace('.js', '')} } from './${dir2}/${file}';`);
//     }
  
//     return exports.join('\n');
//   }
//   generateExports("./src/handlers","./src/middleware")