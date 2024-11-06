import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  document: {
    width: "100%",
  },
  bgStyle: {
    width: "100%",
    height: "350px",
    overflow: "hidden",
  },
  imgCover: {
    objectFit: "cover",
  },
  absolute: {
    position: "absolute",
    top: "0px",
    left: "0",
    width: "100%",
    padding: "24px 20px 0px 20px",
  },
  headerContent: {
    paddingBottom: "24px",
  },
  heading: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    textTransform: "uppercase",
  },

  wrap: {
    width: "80%",
    marginLeft: "120px",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: "32px",
    rowGap: "40px",
  },

  logo: {
    width: "100%",
    height: "100%",
  },
  wFull: {
    width: "100%",
  },
  quotationText: {
    fontWeight: "semibold",
    fontSize: "36px",
    marginTop: "8px",
  },
  textSmall: {
    fontSize: "10px",
    fontWeight: "semibold",
  },

  text: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#FFFFFFB2",
    textTransform: "capitalize",
  },

  tableContainer: {
    transform: "translate(0px , -100px)",
    width: "100%",
    padding: "24px 20px 0px 20px",
  },
  tableFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  tableBg: {
    backgroundColor: "white",
    boxShadow: "lg",
    borderRadius: "16px",
    padding: "16px 16px",
    width: "100%",
    height: "100%",
  },
  tableHead: {
    textAlign: "left",
  },
  headRow: {
    backgroundColor: "#DEDCFE",
    fontSize: "10px",
    textTransform: "uppercase",
    color: "#413ACA",
    fontWeight: 600,
    displayplay: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "16px",
    gap: "80px",
  },

  tableHeader: {
    paddingHorizontal: "16px",
    paddingVertical: "16px",
  },

  tableBody: {
    fontSize: "10px",
    fontWeight: 600,
  },

  oddRow: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: "16px",
  },
  evenRow: {
    backgroundColor: "#F8F9FC",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: "16px",
    borderRadius: "16px",
  },
  bodyText: {
    width: "25%",
    fontSize: "12px",
    fontWeight: 600,
  },
  description: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginTop: "6px",
  },
  textDescription: {
    fontSize: "11px",
    color: "#04151ABF",
  },
  textCenter: {
    textAlign: "center",
  },
  spacing: {
    display: "flex",
    flexDirection: "column",
    margin: "16px 0px",
  },
  marginHour: {
    paddingRight: "20px",
  },
  marginPrice: {
    paddingLeft: "30px",
  },
  marginTotal: {
    paddingLeft: "82px",
  },

  paymentInfo: {
    padding: "16px",
    paddingRight: "36px",
    backgroundColor: "#DEDCFE80",
    borderRadius: "20px",
  },
  flexBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wHalf: {
    width: "50%",
  },
  paymentTitle: {
    fontSize: "10px",
    fontWeight: 700,
    color: "#5850EB",
    textTransform: "uppercase",
  },
  marginTop: {
    marginTop: "12px",
  },
  fontNormal: {
    fontSize: "11px",
    fontWeight: "normal",
  },
  fontSemibold: {
    fontSize: "11px",
    fontWeight: "semibold",
  },
});
