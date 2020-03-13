import React from "react"
import styled from "styled-components"

const JobCard = ({ job, ...rest }) => (
  <S.Container>
    <S.Flex>
      <S.Type>@ {job.type}</S.Type>
      <S.Title>{job.title}</S.Title>
      <S.Details>
        {job.location && <S.Detail>@ {job.location}</S.Detail>}
        {job.category && <S.Detail>@ {job.category}</S.Detail>}
      </S.Details>
      <S.CompanyLogo />
    </S.Flex>
  </S.Container>
)

export default JobCard

const S = {}

S.Container = styled.div`
  height: 243px;
  width: 290px;
  display: block;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
  :hover {
    cursor: pointer;
  }
`
S.Flex = styled.div`
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
`

S.Type = styled.span`
  height: 15px;
  color: #292929;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.26px;
  line-height: 15px;
  margin-bottom: 20px;
`

S.Title = styled.span`
  height: 48px;
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

S.Details = styled.div`
  width: 204px;
  display: flex;
  justify-content: space-between;
`

S.Detail = styled.span`
  height: 15px;
  color: #949494;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.26px;
  line-height: 15px;
`

S.CompanyLogo = styled.img``
