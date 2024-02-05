import React from "react";
import { Button } from "../../atoms/button";
import { Container } from "../../atoms/container";
import { Text } from "../../atoms/text";

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  title: string;
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
