
import { StyleSheet } from 'react-native'

import { scalePx2dp } from '@/src/utils/index'

export default StyleSheet.create({
    "users": {
        "width": "100%",
        "minHeight": "100%",
    },
    "users-header": {
        "position": "relative",
        "width": "100%",
    },
    "users-header-bg":{
        "position": "relative",
        "width": "100%",
        "height": scalePx2dp(115),
    },
    "users__bg": {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    "users__avatarUrl": {
        "width": scalePx2dp(75),
        "height": scalePx2dp(75),
        "marginTop": scalePx2dp(-50),
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderRadius": scalePx2dp(150),
        "backgroundColor": "#d8d8d8",
        "overflow": "hidden",
        "textAlign": "center"
    },
    "users__avatarUrl-img": {
        "width": scalePx2dp(75),
        "height": scalePx2dp(75)
    },
    "users-card": {
        "width": "90%",
        "marginTop": scalePx2dp(10),
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "overflow": "hidden",
        "textAlign": "center"
    },
    "users-card__text": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": scalePx2dp(25),
        "color": "#ccc"
    },
    "users-card__username": {
        "width": "100%",
        "height": scalePx2dp(70),
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": scalePx2dp(70)
    },
    "users-card__text-title": {
        "fontWeight": "400",
        "color": "#7d4c9f",
        "paddingTop": 0,
        "paddingRight": scalePx2dp(30),
        "paddingBottom": 0,
        "paddingLeft": scalePx2dp(30),
        "lineHeight": scalePx2dp(30),
        "fontSize": scalePx2dp(21),
        "textAlign": "center"
    },
    "users-link": {
        "width": "100%"
    },
    "users-link__item": {
        "position": "relative",
        "width": "90%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "overflow": "hidden",
        "height": scalePx2dp(60),
        "borderWidth": 0,
        "borderStyle": "solid",
        "borderColor": "#e7e7f0",
        "borderBottomWidth": scalePx2dp(1)
    },
    "users-link__button": {
        "backgroundColor": "transparent",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": scalePx2dp(17),
        "color": "#2a2a30",
        "lineHeight": scalePx2dp(60),
        "textAlign": "left",
        "borderRadius": 0
    },
    "users-link__icon": {
        "position": "absolute",
        "left": 0,
        "top": scalePx2dp(15.5),
        "width": scalePx2dp(30),
        "height": scalePx2dp(30)
    },
    "users-link__icon-help": {
        "width": scalePx2dp(30),
        "height": scalePx2dp(30)
    },
    "users-link__title": {
        "width": "100%",
        "position": "absolute",
        "left": scalePx2dp(45),
        "top": 0,
        "height": scalePx2dp(60),
    },
    "users-link__title-text": {
        "fontSize": scalePx2dp(17),
        "color": "#2a2a30",
        "lineHeight": scalePx2dp(60)
    },
    "users-link__subtitle": {
        "position": "absolute",
        "right": scalePx2dp(45),
        "top": 0,
        "height": scalePx2dp(60),
    },
    "users-link__subbutton": {
        "position": "absolute",
        "right": scalePx2dp(45),
        "top": scalePx2dp(15.5)
    },
    "users-link__subtitle-text": {
        "fontSize": scalePx2dp(15),
        "color": "#ccc",
        "lineHeight": scalePx2dp(60)
    },
    "users-link__arrow": {
        "position": "absolute",
        "right": 0,
        "top": scalePx2dp(18),
        "width": scalePx2dp(25)
    },
    "users-link__arrow--active": {
        "width": scalePx2dp(25),
        "height": scalePx2dp(25)
    },
    "users-link__title--chart-text": {
        "width": "100%",
        "fontSize": scalePx2dp(17),
        "color": "#2a2a30",
        "lineHeight": scalePx2dp(60),
        "paddingRight": scalePx2dp(10)
    }
})