import styled from "styled-components";

export const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-primary);
    color: var(--secondary-text);
    border: 1px solid var(--primary);
    border-radius: 0.375rem;
    min-width: 150px;
    padding: 0.75rem 1.25rem;
    transition-duration: 300ms;

    &:hover {
        cursor: pointer;
        scale: 105% 105%;
        box-shadow: 0px 0px 8px var(--primary-glow);
    }
`

export const GhostButton = styled(BaseButton)`
    background: var(--glass-bg);
    color: var(--primary);
    gap: 0.5rem;
`


export const CategoryButton = styled(BaseButton)`
    background: var(--background);
    color: color-mix(in oklab, var(--foreground) 70%, transparent);
    border: unset;
    border-bottom: 2px solid var(--background);
    border-radius: unset;
    padding: 0.35rem 1rem;
    min-width: 100px;

    &:hover {
        background: color-mix(in oklab, var(--glass-bg) 80%, transparent);
        border-bottom: 2px solid var(--primary);
        color: var(--primary);
        box-shadow: none;
        scale: unset;
    }

    &:focus {
        background: color-mix(in oklab, var(--glass-bg) 80%, transparent);
        border-bottom: 2px solid var(--primary);
        color: var(--primary);
    }
`


export const JobButton = styled(CategoryButton)`
    justify-content: start;
    border: unset;
    border-left: 2px solid color-mix(in oklab, var(--primary) 50%, transparent);
    padding: 0.65rem 1rem;
    min-width: 260px;

    &:hover {
        border-bottom: unset;
        border-left: 2px solid var(--primary);
    }

    &:focus {
        border-bottom: unset;
        border-left: 2px solid var(--primary);
    }
`

export const DangerButton = styled(BaseButton)`
    background: var(--destructive);
    color: var(--destructive-foreground);
    border: 1px solid var(--destructive);
    min-width: unset;
    padding: 0.5rem 1rem;

    &:hover {
        cursor: pointer;
        scale: 102% 102%;
        box-shadow: 0px 0px 10px var(--destructive);
    }
`
