import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        maxWidth: 345,
    },
  });

class Application extends Component {

    render() {
        const { classes } = this.props;
        return(
            <Card className = { classes.root } >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={this.props.app.img.url}
                        title={this.props.app.img.title}
                        alt={this.props.app.img.alt}
                        height="140"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.app.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.app.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
    
}

export default withStyles(styles)(Application)