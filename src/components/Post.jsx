import { Favorite, FavoriteBorder, MoreVert, Share, Search } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  InputBase,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {


  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "gray",
    padding: "0 10px",
    borderRadius: "20px",
    width: "60%",
  }));
  return (
    <Card sx={{ margin: 5 }}>
      
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Rahul .5h"
        subheader="September 14, 2022"
       
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.....
        </Typography>
      </CardContent>
      <div className="flex space-x-5 justify-between">
      <Search className="h-9 mt-5 ml-5 w-full">
        <InputBase placeholder="Comment Here...."/>
        
      </Search><button>fhff</button>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      </div>
    </Card>
  );
};

export default Post;
