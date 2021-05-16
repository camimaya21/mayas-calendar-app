export interface ISubcategories {
  locale: 'string'
  pagination: IPagination
  subcategories: ISubcategory[]
}

export interface IPagination {
  object_count: 'number'
  page_number: 'number'
  page_size: 'number'
  page_count: 'number'
  continuation: 'string'
  has_more_items: 'boolean'
}

export interface ISubcategory {
  id: 'string'
  resource_uri: 'string'
  name: 'string'
  parent_category: IParentCategory
}

export interface IParentCategory {
  id: 'string'
  resource_uri: 'string'
  name: 'string'
  name_localized: 'string'
  short_name: 'string'
  short_name_localized: 'string'
  subcategories: ISubcategory[]
}
