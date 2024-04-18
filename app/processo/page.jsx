import React from "react";
import Layout from "../../components/layout";
// import Card from "../../components/Card";
// import CircularProgress from "@mui/material/CircularProgress";
// import styles from "./Projetos.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProcessAnalytics from "@/components/ProcessAnalityc/Process";

export default async function Analytics() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/dashboard");
  }

  return (
    <Layout>
      <ProcessAnalytics />
    </Layout>
  );
}
