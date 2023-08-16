import Layout from "@/components/Layout";
import { Button, Title } from "@mantine/core";
import { useState } from "react";

export default function ProductPage(){
  
  const [IsOpenAdd, setIsOpenAdd] = useState(false)
  return (
    <>
      <Layout title='Product Page'>
        <main>
          <section
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}>
            <Title order={1} style={{marginBottom:"10px"}}>List Product</Title>
          <Button
          onClick={()=>setIsOpenAdd(true)}
          >Add Product
          </Button>
          </section>
          </main>
          
      </Layout>
    </>
  )
}