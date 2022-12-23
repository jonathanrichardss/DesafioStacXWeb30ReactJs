import styled from 'styled-components';

export const HomeStyle = styled.div`

    
    --main-bg-color: #121212;
    --main-content-color: #27272A;
    --bg-logo-color: #DADADA54;
    --default-bradius: 8px;
    


      min-width: 100vw;
      height: 100vh;
      background-color: var(--main-bg-color);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center; 
      color: #FFFF;
      font-family: 'Inter', sans-serif;
      position: absolute;
      overflow-x: hidden;
      
    
      
      h1 {  
    
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 20px;
        height: 76px;
        white-space: wrap;
        margin-bottom: 50px;
        width: 1000px;
      }

    


    .hdrStyle {
        margin-bottom: 20px;
    }

    .cardContent {
      display: flex;
      flex-direction: row;
      font-size: 20px;
      justify-content: space-around;    
      line-height: 32px;  
    }

    footer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 10px;
      width: 100%;
      margin-top: 121px;
    }

    button {
      margin: 22px;
    }

`;