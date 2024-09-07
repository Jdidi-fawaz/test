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
          transform: "scale(1.05)",
        },
      }}
    >
      <Avatar
        src={user.avatar}
        alt={user.name}
        sx={{ width: 60, height: 60, marginRight: 2 }}
      />
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {user.email}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {user.role}
        </Typography>
      </CardContent>
    </Card>
  );
};
