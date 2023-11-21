import * as S from './styles';
import React from 'react';

interface ISloganProps{
    text: string
}

export const Slogan = (props:ISloganProps) => {
    return(
        <S.SloganSection>
            <S.SloganText className="fonteInterRegular">{props.text}</S.SloganText>
        </S.SloganSection>
    )
}