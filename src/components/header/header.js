import { DISPLAY_NAME } from "../../support/Constants";
import { useState } from 'react';
import GmailLogin from "../Login/GmailLogin";

const Header = props => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand">{props.title}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Home
                                    <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">my money</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">my kitchen</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <GmailLogin/>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header