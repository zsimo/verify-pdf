const fs = require("fs").promises;
const path = require("path");
const verifyPDF = require('./lib/verifyPDF');
const { getCertificatesInfoFromPDF } = require('./lib/certificateDetails');

Object.assign(verifyPDF, { getCertificatesInfoFromPDF });

//module.exports = verifyPDF;


// aruba
// const signedPdfBuffer = fs.readFileSync('multa-svizzera-africa-2023-07_signed.pdf');
//
// // docusign
// //const signedPdfBuffer = fs.readFileSync('SOA_Sintetica_PeLICAn_PlatformMigration_CR_3_v1.0.pdf');
//
// // const {
// //   verified,
// //   authenticity,
// //   integrity,
// //   expired,
// //   signatures
// // } = verifyPDF(signedPdfBuffer);
// try {
//   const certs = verifyPDF.getCertificatesInfoFromPDF(signedPdfBuffer);
//   fs.writeFileSync("./out.json", JSON.stringify(certs, null, 2));
//   console.log("found");
// } catch (e) {
//   console.log("not found");
// }

module.exports = async function (file) {

  //const signedPdfBuffer = fs.readFileSync('multa-svizzera-africa-2023-07_signed.pdf');
  const signedPdfBuffer = await fs.readFile(path.resolve(process.cwd, file));

// docusign
//const signedPdfBuffer = fs.readFileSync('SOA_Sintetica_PeLICAn_PlatformMigration_CR_3_v1.0.pdf');

// const {
//   verified,
//   authenticity,
//   integrity,
//   expired,
//   signatures
// } = verifyPDF(signedPdfBuffer);
  try {
    const certs = verifyPDF.getCertificatesInfoFromPDF(signedPdfBuffer);
    //fs.writeFileSync("./out.json", JSON.stringify(certs, null, 2));
    return certs;
  } catch (e) {}
}
