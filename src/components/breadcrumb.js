import React from 'react';
import styled from 'styled-components';
import { ArrowIcon } from 'Icons/icons';

const BreadCrumbWrapper = styled.div`
  height: 16px;
  width: calc(100% - 5px);
  background: ${(props) => props.theme.selection};
  display: flex;
  padding: 13px;
  box-sizing: border-box;
`;

const Path = styled.div`
  display: flex;
  padding: 0px 2px;
  align-items: center;
`;

const PathName = styled.div``;
const BoxShadow = styled.div`
  box-shadow: #21222c 1px 11px 6px -6px inset;
  width: 100%;
  height: 10px;
`;
const BreadCrumb = ({ openFile }) => (
  <>
    <BreadCrumbWrapper>
      <Path>
        <PathName>contents</PathName>
        <ArrowIcon />
      </Path>
      <Path>
        <PathName>
          index.
          {openFile}
        </PathName>
      </Path>
    </BreadCrumbWrapper>
    <BoxShadow />
  </>
);

export default BreadCrumb;
