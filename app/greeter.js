import config from './config.json';
import styles from './greeter.css';

class greeter extends Component{
    render(){
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default greeter