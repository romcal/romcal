export * from './helpers';
export * from './utils';

// const time = new Date();

// const distDir = 'dist';
// const localesDistDir = `${distDir}/locales`;
// const calendarsDistDir = `${distDir}/calendars`;

// (async (): Promise<void> => {
//   log({ message: `${chalk.bold.red('Romcal')} package/data builder` });

//   log({ message: 'Cleaning output folder' });
//   rimraf.nativeSync(distDir);

//   await buildJsonSchema({
//     entryPoint: 'src/{constants,types}/**/*.ts',
//     outDir: distDir,
//     outFileNameWithoutExt: 'schema',
//     onWriteFile,
//   });

//   await Promise.all([
//     buildTypeScriptFiles({
//       entryPoint: 'src/index.ts',
//       outDir: distDir,
//       outFileNameWithoutExt: 'index',
//       outputDts: true,
//       outputSourcemap: true,
//       onWriteFile,
//     }),

//     buildLocales({
//       entryPoints: 'src/locales/*.yaml',
//       outDir: localesDistDir,
//       onWriteFile,
//     }),

//     await buildMartyrology({
//       entryPoint: 'src/martyrology/martyrology.yaml',
//       outPath: `${distDir}/martyrology/martyrology.json`,
//       onWriteFile,
//     }).then(async (martyrologyCatalog) => {
//       await buildCalendars({
//         entryPoints: 'src/calendars/**/*.yaml',
//         martyrology: martyrologyCatalog,
//         outDir: calendarsDistDir,
//         onWriteFile,
//       });
//     }),
//   ]);

//   const duration = getDuration(time);
//   console.log(`⚡️ Build success in ${duration}`);
// })();
