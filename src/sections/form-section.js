import React from "react"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import ContactForm from "../components/contact-form"

const FormSection = ({ heading, form }) => {
  return (
    <S.Section>
      {heading && <PortableText blocks={heading} />}
      <ContactForm form={form} />
    </S.Section>
  )
}

export default FormSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
`
