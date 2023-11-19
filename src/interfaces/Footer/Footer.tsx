import React from "react";
import * as S from "./footer.styled";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.Container>
          {/* <S.Content>
            <S.Title>Sociais</S.Title>
            <S.Item>Projeto</S.Item>
            <S.Item>ETEC Adolpho Berezin</S.Item>
            <S.Item>CPS</S.Item>
          </S.Content> */}
          <S.Content>
            <S.Title>Contato</S.Title>
            <S.Item>(11) 91351-1986 </S.Item>
          </S.Content>
          <S.Content>
            <S.Title>Redes Sociais</S.Title>
            <S.Item href="https://www.facebook.com/profile.php?id=61551492807955&mibextid=ZbWKwL"
            >Facebook</S.Item>
            <S.Item href="https://instagram.com/santosaldoce?igshid=NzZlODBkYWE4Ng==">Instagram</S.Item>
          </S.Content>
        </S.Container>
      </S.Footer>
      <S.FooterBottom>
        <S.Copy>
          © {currentYear} Desenvolvido por Social Unum Maker. Todos os direitos reservados.
        </S.Copy>
      </S.FooterBottom>
    </>
  );
};

export default Footer;
