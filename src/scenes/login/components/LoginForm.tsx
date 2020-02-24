import * as React from 'react';
import {formatMessage} from './../../../common/translation/Translate';
import { ButtonComponent } from './../../../components/buttons/ButtonComponent';
import ButtonType from './../../../constants/buttons/ButtonTypeEnum';
import ButtonVariant from './../../../constants/buttons/ButtonVariantEnum';
import Icon from './../../../constants/icons/IconsEnum';

export interface LoginData {
  name: string,
  password: string,
  onSave: (e :any) => void,
  onChange: (fieldName: string, value: string) => void,
  isLoading: boolean,
  loginErrMsg: string
}

export const LoginFormComponent: React.SFC<LoginData> = (props) => {
    return (
      <div className="p-login">
        <div className={props.isLoading ? 'o-loader js-loader is-loading' : 'o-loader js-loader'}></div>
        <form className="c-form c-form--login js-login-form">
          <div className="o-brand">
            <svg width="105" height="30" viewBox="0 0 105 30" xmlns="http://www.w3.org/2000/svg"><title>{Icon.LOGINLOGO.title}</title><defs></defs>
            <use xlinkHref={Icon.LOGINLOGO.url}></use>
            </svg>
          </div>
          <legend className="c-form__title">{formatMessage('login.welcome')}</legend>
            <p className="c-form__intro">{formatMessage('login.intro')}</p>
            <fieldset className="c-form__field">
                <label className="o-label u-visually-hidden c-form__label" htmlFor="name">{formatMessage('login.username')}</label>
                <input className="o-input c-form__input" type="text" name="name" placeholder="Username" value={props.name} onChange={onChangeInput(props)} required></input>
            </fieldset>
            <fieldset className="c-form__field">
                <label className="o-label u-visually-hidden c-form__label" htmlFor="password">{formatMessage('login.password')}</label>
                <input className="o-input c-form__input" type="password" name="password" placeholder="Password" value={props.password} onChange={onChangeInput(props)} required></input>
            </fieldset>
            {props.loginErrMsg && <div className="o-notice u-attention-required">{props.loginErrMsg}</div>}
            <button className="o-btn o-btn--primary o-btn--large c-form__action js-login-action" type="submit" onClick={props.onSave}>{formatMessage('login.login')}</button>
        </form>
        <a className="c-docs-shortcut" href={'http://www.idetect-soft.eu/mediawiki/'}>
          <ButtonComponent buttonType={ButtonType.SECONDARY} buttonVariants={ButtonVariant.WITHICON} buttonName={formatMessage('login.documentation')} buttonIcon={Icon.DOCUMENT}/>
        </a>
      </div>
    );
}

const onChangeInput = (props: LoginData) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value);
};
