import colors from '@/styles/theme'
import * as Accordion from '@radix-ui/react-accordion'
import styled from 'styled-components'

export const StyledRoot = styled(Accordion.Root)`
  border-radius: 6px;
`

export const StyledItem = styled(Accordion.Item)`
  margin-top: 1px;
  display: grid;
  gap: 0.5rem;
`

export const StyledTrigger = styled(Accordion.Trigger)`
  font-family: inherit;
  background-color: transparent;
  padding: 0 1rem;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
    font-weight: 500;
  line-height: 1;
  color: ${colors.red};
  box-shadow: 0 1px 0 var(--mauve-6);
  border: none;
cursor: pointer;
`

export const StyledHeader = styled(Accordion.Header)`
background-color: #eee;
display: flex;
border-radius: 8px;
`

export const StyledContent = styled(Accordion.Content)`
  overflow: hidden;
  font-size: 1rem;
  color: #555;
  background-color: #eee;
  padding: 1rem;
border-radius: 8px;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;

  &[data-state="open"] {
animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="closed"] {
animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  @keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}


`


