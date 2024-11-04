"use client";
import React from "react";
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./style";
import bgImage from "@app/assets/images/bgImage.png";

const PdfDownload = ({ quotationData }: any) => {
  const tableHeader = [
    {
      id: 1,
      title: "Service",
    },
    {
      id: 2,
      title: "Hours",
    },
    {
      id: 3,
      title: "Price($)",
    },
    {
      id: 4,
      title: "Total",
    },
  ];
  const tableData = JSON.parse(quotationData?.quotationServices);
  const dateString = quotationData.company.createdAt;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-CA");
  return (
    <Document style={styles.document}>
      <Page size="A4">
        <View>
          <View>
            <View style={styles.bgStyle}>
              <Image src={bgImage.src} style={styles.imgCover} />
            </View>
          </View>
          <View style={styles.absolute}>
            <View style={styles.headerContent}>
              <View style={styles.heading}>
                <View>
                  <View
                    style={{
                      width: "133.49px",
                      height: "37.46px",
                      padding: "2px",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${quotationData.company.logo}`}
                      style={styles.logo}
                    />
                  </View>
                  <Text style={styles.quotationText}>Quotation</Text>
                </View>
                <View style={styles.textSmall}>
                  <View style={styles.wrap}>
                    <View>
                      <Text>quotation no.</Text>
                      <Text style={styles.text}>
                        {quotationData.quotationNumber}
                      </Text>
                    </View>
                    <View>
                      <Text>created date</Text>
                      <Text style={styles.text}>
                        {formattedDate}
                      </Text>
                    </View>
                    <View>
                      <Text>invoice to</Text>
                      <Text style={styles.text}>{quotationData.invoiceTo}</Text>
                    </View>
                    <View>
                      <Text>phone</Text>
                      <Text style={styles.text}>
                        {quotationData.company.phoneNumber}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.tableContainer}>
            <View style={styles.tableFlex}>
              <View style={styles.tableBg}>
                <View style={styles.wFull}>
                  <View style={styles.tableHead}>
                    <View style={styles.headRow}>
                      {tableHeader.map((table) => (
                        <Text style={styles.tableHeader} key={table.id}>
                          {table.title}
                        </Text>
                      ))}
                    </View>
                  </View>
                  <View style={styles.spacing}>
                    {tableData.map((table: any, index: number) => (
                      <View
                        key={table.id}
                        style={[
                          index % 2 === 0 ? styles.oddRow : styles.evenRow,
                        ]}
                      >
                        <View style={styles.bodyText}>
                          <Text style={{ fontWeight: "bold" }}>
                            {table.service}
                          </Text>

                          <View style={styles.description} key={index}>
                            <Text style={styles.textDescription}>
                              {table.description}
                            </Text>
                          </View>
                        </View>
                        <Text
                          style={[
                            styles.bodyText,
                            styles.textCenter,
                            styles.marginHour,
                          ]}
                        >
                          {table.hours}
                        </Text>
                        <Text
                          style={[
                            styles.bodyText,
                            styles.textCenter,
                            styles.marginPrice,
                          ]}
                        >
                          {table.price}
                        </Text>
                        <Text
                          style={[
                            styles.bodyText,
                            styles.textCenter,
                            styles.marginTotal,
                          ]}
                        >
                          {table.total}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={[styles.paymentInfo]}>
                  <View style={styles.flexBetween}>
                    <View style={styles.wHalf}>
                      <Text style={styles.paymentTitle}>Payment Info</Text>
                      <View style={styles.marginTop}>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "2px",
                          }}
                        >
                          <Text
                            style={[styles.fontNormal, { marginBottom: "8px" }]}
                          >
                            Account No. :
                          </Text>
                          <Text style={styles.fontSemibold}>
                            {quotationData.accountNumber}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "2px",
                          }}
                        >
                          <Text
                            style={[styles.fontNormal, { marginBottom: "8px" }]}
                          >
                            Bank Name :
                          </Text>
                          <Text style={styles.fontSemibold}>
                            {quotationData.bankName}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={[
                        styles.wHalf,
                        {
                          textTransform: "uppercase",
                        },
                      ]}
                    >
                      <View
                        style={{
                          padding: "0px 16px",
                          fontWeight: 500,
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "8px",
                          }}
                        >
                          <Text style={{ fontSize: "10px" }}>sub total</Text>
                          <Text style={{ fontSize: "10px" }}>
                            {quotationData.totalAmount}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: "10px" }}>tax</Text>
                          <Text style={{ fontSize: "10px" }}>
                            {" "}
                            {quotationData.taxAmount}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          color: "white",
                          backgroundColor: "#5850EB",
                          borderRadius: "20px",
                          padding: "12px 16px",
                          marginTop: "16px",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontWeight: 700,
                          }}
                        >
                          <Text style={{ fontSize: "10px" }}>total price</Text>
                          <Text style={{ fontSize: "10px" }}>
                            {quotationData.totalAmount -
                              quotationData.taxAmount}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "90%",
                margin: "0px auto",
                padding: "20px 20px 0px 20px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <View style={{ width: "66.67%" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      color: "#5850EB",
                      textTransform: "uppercase",
                    }}
                  >
                    terms & conditions
                  </Text>
                  <Text
                    style={{
                      fontSize: "11px",
                      marginTop: "12px",
                      lineHeight: "1.5px",
                    }}
                  >
                    {quotationData.termsAndConditions}
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "0px auto",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${quotationData.company.managerSignature}`}
                      style={styles.logo}
                    />
                  </View>

                  <View
                    style={{
                      padding: "8px 32px",
                      borderTop: "1px solid black",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "4px",
                    }}
                  >
                    <Text style={{ fontSize: "12px", fontWeight: "semibold" }}>
                      {quotationData.company.manager}
                    </Text>
                    <Text style={{ fontSize: "11px", color: "#04151ABF" }}>
                      Associate Manager
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: "24px",
                padding: "16px 0px",
                textAlign: "center",
                backgroundColor: "#5850EB0D",
              }}
            >
              <Text style={{ fontSize: "10px", color: "#04151A" }}>
                Please confirm your acceptance of this quote. Thank you!
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDownload;
