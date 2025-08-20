import styled from "styled-components";

export const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    color: var(--primary-foreground);
    border: 1px solid var(--primary);
    border-radius: 0.375rem;
    min-width: 150px;
    padding: 0.75rem 1.25rem;
    transition-duration: 500ms;

    &:hover {
        cursor:pointer;
        scale: 105% 105%;
    }
`

export const GhostButton = styled(BaseButton)`
    background-color: var(--glass-bg);
    color: var(--primary);
    gap: 0.5rem;
`

// display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #FFF;
//     padding: 1rem 2rem;
//     font-size: 1rem;
//     font-weight: 600;
//     border-radius: 5px;
//     border: none;
//     box-shadow: 0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);
//     width: auto;
//     text-transform: capitalize;
//     color: #000;

//     &:hover {
//         cursor: pointer;
//         background-color: #000;
//         color: #FFF;
//         transition-property: color, background-color;
//         transition-duration: 500ms;
//         border: 1px solid #FFF;
//     }