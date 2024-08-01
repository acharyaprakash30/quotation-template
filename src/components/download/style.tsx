import { StyleSheet } from "@react-pdf/renderer";
import { relative } from "path";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  header: {
    position: "relative",
    width: "100%",
  },
  bgStyle: {
    width: "100%",
    height: "346px",
    overflow: "hidden",
  },
  imgCover: {
    objectFit: "cover",
  },
  absolute: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
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
    gap: "10px",
    color: "white",
    textTransform: "uppercase",
  },

  wrap: {
    width: "80%",
    justifyContent:"flex-end",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  logo: {
    width: "133.49px",
    height: "37.46px",
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
});
