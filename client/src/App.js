import React from 'react'
import { Container, AppBar, Typography, Grow, Grid, Toolbar } from '@mui/material'

import memories from './images/memories.png'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import useStyles from './styles.js'
const App = () => {
    const classes = useStyles()
  return (
    <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Toolbar>

            <img className={classes.image} src={memories} alt="picturediary" height="60"/>
            <Typography className={classes.heading} variant="h2" align="center">PictureDiary
            </Typography>

            </Toolbar>

        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
  )
}

export default App
