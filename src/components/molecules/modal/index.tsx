import React from "react";
import { Button } from "../../atoms/button";
import { Container } from "../../atoms/container";
import { Text } from "../../atoms/text";

type ModalProps = {
  open: boolean;
  children: React.ReactNode;
  title: string;
  setOpen: (open: boolean) => void;
};

export const Modal = ({ open, setOpen, children, title }: ModalProps) => {
  return (
    <Container>
      {open && (
        <Container>
          <Container>
            <Container>
              <Text as="h4">{title}</Text>
              <Button btnText="Close Modal" onClick={() => setOpen(!open)} />
            </Container>
            <Container>{children}</Container>
          </Container>
        </Container>
      )}
    </Container>
  );
};
