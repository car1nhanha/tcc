import { Box, Button, Container, Stack, Typography } from "@mui/material";

interface DefaultCardProps {
  children: React.ReactNode;
}

export const DefaultCard = ({ children }: DefaultCardProps) => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={1}>
        <Typography variant="h5">Default Card</Typography>

        <Button variant="contained" color="primary">
          Novo
        </Button>

        <Box>{children}</Box>
      </Stack>
    </Container>
  );
};
