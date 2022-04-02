import SecureLS from "secure-ls";
import vue from 'vue';

const ls = new SecureLS({
  encodingType: "des",
  isCompression: true,
  encryptionSecret: "my-secret-key",
});

const urlParser = document.createElement("a");

export function domain(url) {
  urlParser.href = url;
  return urlParser.hostname;
}

export function fromNow(time) {
  const between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), " minute");
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), " hour");
  } else {
    return pluralize(~~(between / 86400), " day");
  }
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }

  return time + label + "s";
}

export function setSecureLs(key, value) {
  ls.set(key, value);
}

export function getSecureLs(key) {
  return ls.get(key);
}

export const countriesList = [];

export function intersectA(list1, list2, key1, key2) {
  var result = [];
  for (var i = 0; i < list1.length; i++) {
    var item1 = list1[i],
      found = false;
    for (var j = 0; j < list2.length && !found; j++) {
      var item2 = list2[j]
      found = item1[key1] === list2[j][key2];
      if (found) {
        result.push(item2);
      }
    }
  }
  return result;
}

const labels = {
  'orderNumber': 'Order Number',
  'sourceId': 'Source ID',
  'channel': 'Channel',
  'fromDate': 'From Date',
  'toDate': 'To Date',
  'customer': 'Customer',
  'countryId': 'Country',
  'postalCode': 'Postal Code',
  'amount': 'Amount',
  'status': 'Status',
  'mainCategory': 'Main Category',
  'productGroup': 'Product Group',
  'productCode': 'Product ID',
  'productName': 'Product Name',
  'price': 'Price',
  'shipmentNumber': 'Shipment Number',
  'noofpkgs': 'No Of Pkgs',
  'carrierTrackingNo': 'Tracking No',
  'carrierId': 'Carrier',
  'carrier': 'Carrier',
  'marketplaceOrderfromDate': 'Market Place Order From Date',
  'marketplaceOrdertoDate': 'Market Place Order To Date',
  'marketPlaceId': 'Market Place',
  'shippingDraftfromDate': 'Shipping Draft From Date',
  'shippingDrafttoDate': 'Shipping Draft To Date',
  'shippingCarrierfromDate': 'Shipping From Date',
  'shippingCarriertoDate': 'Shipping To Date',
  'warehouseId': 'Shipping Location',
  'warehousePostCode': 'Warehouse Post Code',
  'name': 'Name',
  'email': 'Email',
  'phone': 'Phone',
  'prefix': 'Prefix',
  'max_weight': 'Weight (Kg)',
  'width': 'Width (Cm)',
  'height': 'Height (Cm)',
  'length': 'Length (Cm)',
  'accountType': 'Account Type',
  'isAwaitingResponse': 'Awaiting Response',
  'serviceType': 'Service Type',
  'collectionDatefromDate': 'Collection From Date',
  'collectionDatetoDate': 'Collection To Date',
  'lastActionBy': 'Last action by'
}

export function transformSalesOrderFilter(filters = {}, advancedFilters = {}, page = 1, itemsPerPage = 10) {
  const filtersResponse = getFilterTransformation(filters)
  const updatedAdvancedFilters = transformAdvancedFilter(advancedFilters)
  const res = {
    "filters": filtersResponse ? [...filtersResponse.updatedFilters] : [],
    "sort": {
      ...filtersResponse.sort
    },
    "paging": {
      "pageNo": page,
      "pageSize": itemsPerPage
    },
    "advanceFilters": [...updatedAdvancedFilters]
  }
   // console.log('transformSalesOrderFilter', res)
  return res;
}

export function getSelectedFilterTransformation(filters = {}, countries = [], marketplaces = [], status = [], productGroups = [], mainCategories = [], warehouses = [], responses = []) {
  let updatedFilters = [];
  let sort = null
  filters && filters.forEach(filter => {
    if (filter.filtersApplied) {
      if (filter.selectedCheckbox) {
        const updatedMarketPlaces = []
        marketplaces && marketplaces.forEach(place => {
          filter.selectedCheckbox && filter.selectedCheckbox.forEach(checkbox => {
            if (checkbox === place.id) {
              updatedMarketPlaces.push(place.name)
            }
          })
        })
        if (updatedMarketPlaces && updatedMarketPlaces.length > 0) {
          updatedFilters.push({
            "key": labels["channel"],
            "value": updatedMarketPlaces.join()
          })
        }
      }

      const headerFilters = filter.filters;
      for (const selectedFilter of Object.keys(headerFilters)) {
        if (selectedFilter !== 'countryId' && selectedFilter !== 'postalCode' && selectedFilter !== 'productGroup' && selectedFilter !== 'mainCategory' && selectedFilter !== 'status' && selectedFilter !== 'warehouseId' && selectedFilter !== 'warehousePostCode' && selectedFilter !== 'isAwaitingResponse') {
          if (!selectedFilter.includes('Sort') && headerFilters[selectedFilter] !== "") {
            updatedFilters.push({
              "key": labels[selectedFilter],
              "value": headerFilters[selectedFilter]
            })
          } else if (selectedFilter.includes('Sort') && headerFilters[selectedFilter] !== "") {
            const sortKey = selectedFilter.replace('Sort', '');
            sort = {
              "key": labels[sortKey],
              "value": headerFilters[selectedFilter]
            }
          }
        }
      }

      if (filter.filterApiName === 'isAwaitingResponse' && filter.filters) {
        const selectedResponse = responses && responses.find(response => response.id == filter.filters.isAwaitingResponse)
        updatedFilters.push({
          "key": labels["isAwaitingResponse"],
          "value": selectedResponse ? selectedResponse.name : ''
        })
      }

      if (filter.filterApiName === 'status' && filter.filters && filter.filters.status) {
        const selectedStatus = status && status.find(status => status.id == filter.filters.status)
        updatedFilters.push({
          "key": labels["status"],
          "value": selectedStatus ? selectedStatus.name : ''
        })
      }


      if (filter.filterApiName === 'country' && filter.filters && filter.filters.countryId) {
        const selectedCountry = countries && countries.find(country => country.id == filter.filters.countryId)
        updatedFilters.push({
          "key": labels["countryId"],
          "value": selectedCountry ? selectedCountry.name : ''
        })
      }

      if (filter.filterApiName === 'country' && filter.filters && filter.filters.postalCode) {
        updatedFilters.push({
          "key": labels["postalCode"],
          "value": filter.filters.postalCode
        })
      }

      if (filter.filterApiName === 'productGroup' && filter.filters && filter.filters.productGroup) {
        const selectedGroup = productGroups && productGroups.find(group => group.id == filter.filters.productGroup)
        updatedFilters.push({
          "key": labels["productGroup"],
          "value": selectedGroup ? selectedGroup.name : ''
        })
      }

      if (filter.filterApiName === 'productGroup' && filter.filters && filter.filters.mainCategory) {
        const category = mainCategories && mainCategories.find(category => category.id == filter.filters.mainCategory)
        updatedFilters.push({
          "key": labels["mainCategory"],
          "value": category.name
        })
      }

      if (filter.filterApiName === 'warehouseId' && filter.filters && filter.filters.warehouseId) {
        const selectedWarehouse = warehouses && warehouses.find(warehouse => warehouse.id == filter.filters.warehouseId)
        updatedFilters.push({
          "key": labels["warehouseId"],
          "value": selectedWarehouse ? selectedWarehouse.name : ''
        })
      }

      if (filter.filterApiName === 'warehouseId' && filter.filters && filter.filters.warehousePostCode) {
        updatedFilters.push({
          "key": labels["warehousePostCode"],
          "value": filter.filters.warehousePostCode
        })
      }
    }
  })
  const filtersObj = {
    updatedFilters: updatedFilters,
    sort: sort
  }
  return filtersObj;
}

export function getFilterTransformation(filters = {}) {
  let updatedFilters = [];
  let sort = null
  filters && filters.forEach(filter => {
    if (filter.filtersApplied) {
      if (filter.selectedCheckbox && filter.selectedCheckbox.length > 0) {
        const updatedCheckbox = filter.selectedCheckbox.join();
        updatedFilters.push({
          "key": "channel",
          "value": updatedCheckbox
        })
      }

      const headerFilters = filter.filters;
      for (const selectedFilter of Object.keys(headerFilters)) {
        if (!selectedFilter.includes('Sort') && headerFilters[selectedFilter] !== "") {
          updatedFilters.push({
            "key": selectedFilter,
            "value": headerFilters[selectedFilter].toString()
          })
        } else if (selectedFilter.includes('Sort') && headerFilters[selectedFilter] !== "") {
          const sortKey = selectedFilter.replace('Sort', '');
          sort = {
            "key": sortKey,
            "value": headerFilters[selectedFilter]
          }
        }
      }
    }
  })

  const filtersObj = {
    updatedFilters: updatedFilters,
    sort: sort
  }
  //console.log('getFilterTransformation', filtersObj)
  return filtersObj;
}

const transformAdvancedFilter = (advancedFilters) => {
  const updatedFilter = [];
  for (const filter of Object.keys(advancedFilters)) {
    const data = {
      "key": filter,
      "value": advancedFilters[filter].toString()
    }
    updatedFilter.push(data)
  }
  return updatedFilter
}

export function transformGridFilters(filters = {}, advancedFilters = {}, page = 1, itemsPerPage = 10) {
  const filtersResponse = getFilterTransformation(filters)
  const updatedAdvancedFilters = transformAdvancedFilter(advancedFilters)
  const res = {
    "filters": filtersResponse ? [...filtersResponse.updatedFilters] : [],
    "sort": {
      ...filtersResponse.sort
    },
    "page": {
      "pageNo": page,
      "pageSize": itemsPerPage
    },
    "advanceFilters": [...updatedAdvancedFilters]
  }
 // console.log('transformGridFilters', res)
  return res;
}

export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function transformFiltersToHeader(filters = [], headers = []) {
  const filtersCopy = [...filters]
  const headersCopy = [...headers]
  filtersCopy && filtersCopy.map(filter => {
    headersCopy && headersCopy.map(header => {

      const headerFilters = header.filters;
      if ((filter.key) in headerFilters) {
        header.filtersApplied = true;
        headerFilters[filter.key] = filter.value
      }
      if (filter.key === 'channel' && ('selectedCheckbox') in header) {
        header.selectedCheckbox = [...filter.value]
      }
    })
  })
  return headersCopy;
}

const transformSaveFilter = (filters) => {
  const updatedFilter = [];
  filters && filters.forEach(filter => {
    if (filter.filtersApplied) {
      if (filter.selectedCheckbox && filter.selectedCheckbox.length > 0) {
        const updatedCheckbox = filter.selectedCheckbox.join();
        updatedFilter.push({
          "id": '0',
          "key": "channel",
          "value": updatedCheckbox,
        })
      }

      const headerFilters = filter.columnFilters;

      for (const [key, selectedFilter] of Object.entries(headerFilters)) {
        if (selectedFilter.filterName !== 'sort' && filter.filters[selectedFilter.filterName] !== '') {
          updatedFilter.push({
            "id": '0',
            "key": selectedFilter.filterName,
            "value": filter.filters[selectedFilter.filterName].toString(),
          })
        }
      }
    }
  })
 // console.log('transformSaveFilter', updatedFilter)
  return updatedFilter;
}

export function transformFilterForSave(filters = {}, filterDetail) {
  const pageFilters = transformSaveFilter(filters)
  const res = {
    "filterId": filterDetail.filterId || '0',
    "name": filterDetail.name,
    "description": filterDetail.description,
    "isFilterForUser": filterDetail.isFilterForUser,
    "screenType": filterDetail.screenType,
    "pageFilters": pageFilters
  }
 // console.log('transformFilterForSave', res)
  return res;
}

export function getOrderActionId(allStatus, oldAction) {
  let statusId = 0;
  allStatus && allStatus.some(status => {
    if (status.name === oldAction) {
      statusId = parseInt(status.id)
    }
  })
  return statusId
}

export function getCancelActionId(allStatus, name) {
  let statusCode = '';
  allStatus && allStatus.some(status => {
    if (status.name === name) {
      statusCode = status.code
    }
  })
  return statusCode
}

export function getOrderAction(statusAction) {
  switch (statusAction) {
    case "Approve":
    case "Cancel":
    case "Picking":
    case "Picked":
    case "Packed":
    case "Ready to Ship":
    case "Shipped":
    case "Cancelled":
    case "Held":
      return statusAction
  }
}

export function transformOrderData(ordersData) {
  if (ordersData && ordersData.data) {
    const ordersCopy = [...ordersData.data.orders]
    const updatedOrders = ordersCopy && ordersCopy.map(order => {
      order.orderDate = order.orderDate ? vue.prototype.$moment(order.orderDate).format('DD/MM/YYYY') : '';
      return order;
    })
    let newOrders = { ...ordersData }
    newOrders.data.orders = updatedOrders
    return newOrders
  } else {
    return ordersData
  }
}

export function transformShipmentData(shipmentData) {
  if (shipmentData && shipmentData.data) {
    const shipmentsCopy = [...shipmentData.data.shipments]
    const updatedShipments = shipmentsCopy && shipmentsCopy.map(shipment => {
      shipment.shippingDraftDate = shipment.shippingDraftDate ? vue.prototype.$moment(shipment.shippingDraftDate).format('DD/MM/YYYY') : '';
      shipment.shippingCarrierDate = shipment.shippingCarrierDate ? vue.prototype.$moment(shipment.shippingCarrierDate).format('DD/MM/YYYY') : '';
      shipment.marketplaceOrderDate = shipment.marketplaceOrderDate ? vue.prototype.$moment(shipment.marketplaceOrderDate).format('DD/MM/YYYY') : '';
      return shipment;
    })
    let newShipments = { ...shipmentData }
    newShipments.data.shipments = updatedShipments
    return newShipments
  } else {
    return shipmentData
  }
}

export function transformUpcomingPickupsData(shipmentData) {
  if (shipmentData && shipmentData.data) {
    const shipmentsCopy = [...shipmentData.data.shipments]
    const updatedShipments = shipmentsCopy && shipmentsCopy.map(shipment => {
      shipment.collectionDate = shipment.collectionDate ? vue.prototype.$moment(shipment.collectionDate).format('DD/MM/YYYY') : '';
      return shipment;
    })
    let newShipments = { ...shipmentData }
    newShipments.data.shipments = updatedShipments
    return newShipments
  } else {
    return shipmentData
  }
}

const removeLabels = {
  'Order Number': 'orderNumber',
  'Source ID': 'sourceId',
  'Channel': 'channel',
  'From Date': 'fromDate',
  'To Date': 'toDate',
  'Customer': 'customer',
  'Country': 'countryId',
  'Postal Code': 'postalCode',
  'Amount': 'amount',
  'Status': 'status',
  'Main Category': 'mainCategory',
  'Product Group': 'productGroup',
  'Product ID': 'productCode',
  'Product Name': 'productName',
  'Price': 'price',
  'Shipment Number': 'shipmentNumber',
  'No Of Pkgs': 'noofpkgs',
  'Tracking No': 'carrierTrackingNo',
  'Carrier': 'carrierId',
  'Market Place Order From Date': 'marketplaceOrderfromDate',
  'Market Place Order To Date': 'marketplaceOrdertoDate',
  'Market Place': 'marketPlaceId',
  'Shipping Draft From Date': 'shippingDraftfromDate',
  'Shipping Draft To Date': 'shippingDrafttoDate',
  'Shipping From Date': 'shippingCarrierfromDate',
  'Shipping To Date': 'shippingCarriertoDate',
  'Shipping Location': 'warehouseId',
  'Warehouse Post Code': 'warehousePostCode',
  'Name': 'name',
  'Email': 'email',
  'Phone': 'phone',
  'Prefix': 'prefix',
  'Weight (Kg)': 'max_weight',
  'Width (Cm)': 'width',
  'Height (Cm)': 'height',
  'Length (Cm)': 'length',
  'Account Type': 'accountType',
  'Awaiting Response': 'isAwaitingResponse',
  'Service Type': 'serviceType',
  'Collection From Date': 'collectionDatefromDate',
  'Collection To Date': 'collectionDatetoDate',
  'Last action by': 'lastActionBy'
}

export function removeColumnFilter(removedFilter = {}, headers) {
  const updatedFilters = headers && headers.map(filter => {
    if (filter.selectedCheckbox) {
      filter.selectedCheckbox = []
    }
    const headerFilters = filter.filters;
    for (const selectedFilter of Object.keys(headerFilters)) {
      const newLabel = removeLabels[removedFilter.key]
      if (selectedFilter === newLabel) {
        headerFilters[selectedFilter] = ""
      }
    }
    return filter
  })
  //console.log('updatedFilters', updatedFilters)
  return updatedFilters
}

export function updateSortInHeaders(headers) {
  const updatedFilters = headers && headers.map(filter => {
    const headerFilters = filter.filters;

    for (const selectedFilter of Object.keys(headerFilters)) {
      if (selectedFilter.includes('Sort')) {
        headerFilters[selectedFilter] = ""
      }
    }
    return filter
  })
 // console.log('updatedSortHeader', updatedFilters)
  return updatedFilters
}

export function clearHeader(headers) {
  const updatedHeaders = headers.map(header => {
    const filters = header.filters;
    header.filtersApplied = false;
    for (let filter of Object.keys(filters)) {
      filters[filter] = ""
    }
    return header
  })
  return updatedHeaders
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function sortItemsAscending(items, key) {
  items = items.sort(function (x, y) {
    let a = x[key] && !isNumeric(x[key]) ? x[key].toUpperCase() : x[key],
      b = y[key] && !isNumeric(y[key]) ? y[key].toUpperCase() : y[key];
    return a == b ? 0 : a > b ? 1 : -1;
  });
}

export function sortItemsDescending(items, key) {
  items = items.sort(function (x, y) {
    let a = x[key] && !isNumeric(x[key]) ? x[key].toUpperCase() : x[key],
      b = y[key] && !isNumeric(y[key]) ? y[key].toUpperCase() : y[key];
    return a == b ? 0 : b > a ? 1 : -1;
  });
}
