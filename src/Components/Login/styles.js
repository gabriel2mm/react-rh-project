import styled from 'styled-components';


export const Buttons = styled.button `
`; 

export const Container = styled.div`
    height: 400px;
    width: 30%;
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);  
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const InputText  = styled.input`
  border: 0;
  border-bottom: 2px solid #9e9e9e;
  outline: none;
  transition: .2s ease-in-out;
  box-sizing: border-box;
`; 

export const ContainerInput = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: Flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CenterForm = styled.div `
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);  
`;