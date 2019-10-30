import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        maxWidth: 345,
    },
  });

class Application extends Component {
    render() {
        const { app } = this.props
        const { classes } = this.props;
        return(
            <Card className = { classes.root } >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={app.img.url}
                        title={app.img.title}
                        alt={app.img.alt}
                        height="140"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {app.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {app.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
    
}

Application.prototypes = {
    app : PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img:  PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    }),
}

export default withStyles(styles)(Application)