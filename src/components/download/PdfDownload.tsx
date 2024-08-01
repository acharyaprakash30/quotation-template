"use client";
import React from "react";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./style";
import logo from "@app/assets/images/logo.png";
import bgImage from "@app/assets/images/bgImage.png";

const PdfDownload = () => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.bgStyle}>
              <Image src={bgImage.src} style={styles.imgCover} />
            </View>
          </View>
          <View style={styles.absolute}>
            <View style={styles.headerContent}>
              <View style={styles.heading}>
                <View>
                  <Image src={logo.src} style={styles.logo} />
                  <Text style={styles.quotationText}>Quotation</Text>
                </View>
                <View style={styles.textSmall}>
                  <View style={styles.wrap}>
                    <View>
                      <Text>quotation no.</Text>
                      <Text style={styles.text}>44832</Text>
                    </View>
                    <View>
                      <Text>created date</Text>
                      <Text style={styles.text}>Jun 4, 2024</Text>
                    </View>
                    <View>
                      <Text>invoice to</Text>
                      <Text style={styles.text}>Mike Johnson</Text>
                    </View>
                    <View>
                      <Text>phone</Text>
                      <Text style={styles.text}>+977-9843229846</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDownload;
