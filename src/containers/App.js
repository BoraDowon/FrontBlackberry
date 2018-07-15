import React, { Component } from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';
import { Badge, Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

const cx = classNames.bind(styles);
console.log(styles);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid className={cx('header')}>
          <ul className={cx('header__menu')}>
            <li className={cx('header__menu__item')}>타임라인</li>
            <li className={cx('header__menu__item')}>네이버</li>
            <li className={cx('header__menu__item', 'active')}>IT 라운지</li>
            <li className={cx('header__menu__item')}>카카오</li>
            <li className={cx('header__menu__item')}>쿠팡</li>
            <li className={cx('header__menu__item')}>SK 텔레콤</li>
          </ul>
          <ul className={cx('header__indicator')}>
            <li className={cx('header__indicator__item')}/>
            <li className={cx('header__indicator__item', 'active')}/>
            <li className={cx('header__indicator__item')}/>
            <li className={cx('header__indicator__item')}/>
            <li className={cx('header__indicator__item')}/>
            <li className={cx('header__indicator__item')}/>
            <li className={cx('header__indicator__item')}/>
            <li className={cx('header__indicator__item')}/>
          </ul>
        </Grid>
        <Grid className={cx('article')}>
          <Jumbotron className={cx('article__notice')}>
            <h3 className={cx('display-4')}>Hello, world!</h3>
            <p className={cx('lead')}>Welcome :)</p>
            <hr className={cx('my-2')}/>
            <p className={cx('lead')}>This is a notice block.</p>
          </Jumbotron>
        </Grid>
        <Grid className={cx('article')}>
          <p><Badge className={cx('badge-primary')}>Sports</Badge></p>
          <h5 className={cx('article__title')}>Test</h5>
          <p className={cx('article__description')}>Qweqweqwe</p>
          <p className={cx('article__author')}>
            <span className={cx('article__author__organization')}>Amazon</span>
            <span className={cx('article__author__nickname')}>Alexa</span>
          </p>
        </Grid>
        <Grid className={cx('article')}>
          <p><Badge className={cx('badge-danger')}>Gossip</Badge></p>
          <h5 className={cx('article__title')}>Blah Blah</h5>
          <p className={cx('article__description')}>Qweqweqwe</p>
          <p className={cx('article__author')}>
            <span className={cx('article__author__organization')}>Kakao</span>
            <span className={cx('article__author__nickname')}>Lion</span>
          </p>
        </Grid>
        <Grid className={cx('article')}>
          <p><Badge className={cx('badge-danger')}>Gossip</Badge></p>
          <h5 className={cx('article__title')}>한글 테스트</h5>
          <p className={cx('article__description')}>가나다라</p>
          <p className={cx('article__author')}>
            <span className={cx('article__author__organization')}>Kakao</span>
            <span className={cx('article__author__nickname')}>Lion</span>
          </p>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
