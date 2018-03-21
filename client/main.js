import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import React from 'react';
import {render} from 'react-dom';
import './main.html';
import {WM} from './components/wm.jsx';
import MainBar from './components/mainbar.jsx';

var mainbar_classes = {
	"drawer_paper": "drawer_paper",
	"drawer_header": "drawer_header",
	"app_bar_shift": "app_bar_shift",
	"app_bar": "app_bar",
	"app_bar_shift_left": "app_bar_shift_left",
	"app_bar_shift_right": "app_bar_shift_right",
	"content_shift_left": "content_shift_left",
	"content_shift_right": "content_shift_right",
	"content_right": "content_right",
	"content_left": "content_left",
	"content": "content",
	"hide": "hide",
	"menu_button": "menu_button",
	"app_frame": "app_frame",
	"root": "root"
};

Template.app.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.app.onRendered(function helloOnCreated() {
    render(<App></App>, document.getElementById('app'));
});

Template.app.helpers({
    counter() {
        return Template.instance().counter.get();
    }
});

Template.app.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    }
});

class App extends React.Component {
    render () {
        return <div>
			<MainBar classes={mainbar_classes}></MainBar>
			</div>;
    }
}
