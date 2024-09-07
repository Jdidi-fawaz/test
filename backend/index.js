const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        boxShadow: 3,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.07)",
        },
      }}
    >
  
        <Typography variant="body2" color="textSecondary">
          {user.email}
        </Typography>
      <CardContent>
        <Typography variant="h7">{user.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {user.avatar}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {user.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
