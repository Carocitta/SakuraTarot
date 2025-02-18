import styled from "styled-components";

export const ListDiv = styled.div`

    padding-left: 25rem;
    margin-top: 5rem;
    height: fit-content;
    font-size: 1.5rem;

    @media (max-width: 1024px) and (orientation: landscape) {
      padding-left: 15rem;
      font-size: 1.3rem;
    }

    @media (max-width: 768px) {
        padding-left: 8rem;
        padding-top: 0.8rem;
        font-size: 0.9rem;
    }

    .readingItem {
        padding: 0.1rem;
    }`
;

export const DeleteBttn = styled.button`
    display: flex;
    background: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--brown);
    text-decoration: underline;
    margin-left: 5rem;
    margin-top: 2rem;

    @media (max-width: 1024px) and (orientation: landscape) {
      margin-left: 23rem;
    }

    @media (max-width: 768px) {
        margin-left: 13rem;
        margin-top: 1rem;
        font-size: 1rem;
    }`
;