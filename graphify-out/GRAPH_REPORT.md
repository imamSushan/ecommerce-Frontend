# Graph Report - .  (2026-07-04)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 88 nodes · 155 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `ShopContext` - 10 edges
2. `ShopContextProvider()` - 7 edges
3. `getTotalCartItems()` - 5 edges
4. `CartSidebar()` - 3 edges
5. `Button()` - 3 edges
6. `CartItems()` - 3 edges
7. `useHero()` - 3 edges
8. `ProductPage()` - 3 edges
9. `Navbar()` - 3 edges
10. `slides` - 3 edges

## Surprising Connections (you probably didn't know these)
- `CartSidebarUI()` --calls--> `getTotalCartItems()`  [INFERRED]
  src/components/ui/CartSidebarUI.tsx → src/utils/cartUtils.ts
- `CartSidebar()` --calls--> `getTotalCartItems()`  [INFERRED]
  src/components/layout/CartSidebar.tsx → src/utils/cartUtils.ts
- `Hero()` --calls--> `useHero()`  [EXTRACTED]
  src/components/ui/Hero.tsx → src/hooks/useHero.ts
- `Accordion()` --calls--> `getAccordionData()`  [EXTRACTED]
  src/components/ui/accordion/Accordion.tsx → src/utils/accordionData.tsx
- `ShopContextProvider()` --calls--> `getCartItemsByProduct()`  [EXTRACTED]
  src/context/ShopContext.tsx → src/utils/cartUtils.ts

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.29
Nodes (9): ShopContextProvider(), all_Product, findCartItem(), getCartItemsByProduct(), getTotalCartItems(), getTotalCartQuantity(), isItemInCart(), loadCartFromLocalStorage() (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (8): ActionItem(), ActionItemProps, CartSidebar(), Header(), Sidebar(), Navbar(), SidebarUI(), SidebarUIprops

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (7): Footer(), Cart(), Home(), App(), HomeCat(), HomeCatProps, NewsLetter()

### Community 3 - "Community 3"
Cohesion: 0.24
Nodes (6): ShopContext, Button(), ButtonProps, CartItems(), CartSidebarUI(), CartSidebarUIprops

### Community 4 - "Community 4"
Cohesion: 0.31
Nodes (6): Accordion(), AccordionProps, AccordionItem(), AccordionItemProps, categoryAccordionContent, getAccordionData()

### Community 5 - "Community 5"
Cohesion: 0.33
Nodes (5): ProductPage(), ProductOverview(), SizeSelection(), SizeSelectionProps, SizeGuide()

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (3): useHero(), Hero(), slides

### Community 8 - "Community 8"
Cohesion: 0.40
Nodes (4): CartItem, CartState, Product, ShopContextType

## Knowledge Gaps
- **14 isolated node(s):** `ActionItemProps`, `ButtonProps`, `CartSidebarUIprops`, `HomeCatProps`, `ImageUrl` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ShopContext` connect `Community 3` to `Community 0`, `Community 1`, `Community 2`, `Community 5`, `Community 7`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `getTotalCartItems()` connect `Community 0` to `Community 1`, `Community 3`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `CartSidebar()` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `getTotalCartItems()` (e.g. with `CartSidebar()` and `CartSidebarUI()`) actually correct?**
  _`getTotalCartItems()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `ActionItemProps`, `ButtonProps`, `CartSidebarUIprops` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._