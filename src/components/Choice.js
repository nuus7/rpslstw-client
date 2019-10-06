import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getImage } from '../helpers/images';

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: ${({ theme }) => theme.color.palette.platinum};
  transition: ${({ theme }) => theme.transition.quick};
  background-color: ${({ theme }) => theme.color.palette.charlestonGreen};
  opacity: 0;
`;

const InnerTile = styled.div`
  background-size: cover;
  height: 180px;
  width: 240px;
  margin: 1rem;
  border: 4px solid ${({ theme }) => theme.color.palette.charlestonGreen};
  cursor: pointer;
  background: ${({ imageURL }) => `url(${imageURL}) no-repeat center`};
  background-size: cover;
  border-radius: 16px;
  transition: ${({ theme }) => theme.transition.quick};
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    
    ${Overlay} {
      opacity: 0.5;
    }
  }
`;

export default class Choice extends Component {
  constructor() {
    super();

    this.state = {
      imageURL: '',
    };
  }

  componentDidMount() {
    const { choice } = this.props;

    this.setState({
      imageURL: getImage(choice),
    });
  }


  render() {
    const { imageURL } = this.state;
    const { choice, onClick } = this.props;

    return (
      <InnerTile imageURL={imageURL} onClick={onClick}>
        <Overlay>{choice}</Overlay>
      </InnerTile>
    );
  }
}

Choice.propTypes = {
  choice: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// export default Choice;
