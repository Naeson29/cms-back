export default [
    {
		label: 'Customers',
		link: '/customer',
		icon: 'fas fa-hospital-user',
	},
	{
		label: 'ProductsHandler',
		link: '#',
		icon: 'fas fa-suitcase',
		children: [
			{
				label: 'SubscriptionTypes',
				link: '/subscription-type',
				icon: 'fas fa-recycle',
			},
			{
				label: 'Products',
				link: '/product',
				icon: 'fas fa-box-open',
			},
		]
	},
	{
		label: 'Deliveries',
		link: '#',
		icon: 'fas fa-truck',
		children: [
			{
				label: 'CurrentDeliveries',
				link: '/current-deliveries',
				icon: 'fas fa-truck-loading',
			},
			{
				label: 'NextDeliveries',
				link: '/next-deliveries',
				icon: 'fas fa-clipboard',
			}
		]
	},
	{
		label: 'Orders',
		link: '/order',
		icon: 'fas fa-shopping-cart',
	},
	{
		label: 'Accounting',
		link: '#',
		icon: 'fas fa-calculator',
		children: [
			{
				label: 'Invoices',
				link: '/invoice',
				icon: 'fas fa-file-invoice',
			},
			{
				label: 'AccountChart',
				link: '/account_chart',
				icon: 'fas fa-wallet',
			},
			{
				label: 'AccountingEntryFile',
				link: '/accounting_entry_file',
				icon: 'fas fa-piggy-bank',
			}
		]
	},
	{
		label: 'MedicineDatabase',
		link: '#',
		icon: 'fas fa-book-medical',
		children: [
			{
				label: 'Drugs',
				link: '/drug',
				icon: 'fas fa-pills',
			},
			{
				label: 'Presentations',
				link: '/presentation',
				icon: 'fas fa-prescription-bottle-alt',
			},
			{
				label: 'GenericDrugs',
				link: '/generic-drug',
				icon: 'fas fa-hand-holding-medical',
			},
			{
				label: 'Compositions',
				link: '/composition',
				icon: 'fas fa-dna',
			},
			{
				label: 'DrugConditions',
				link: '/drug-condition',
				icon: 'fas fa-file-medical',
			}
		]
	},
	{
		label: 'Partners',
		link: '#',
		icon: 'fas fa-handshake',
		children: [
			{
				label: 'Softwares',
				link: '/software',
				icon: 'fas fa-laptop-code',
			},
			{
				label: 'SoftwareCompanies',
				link: '/software-company',
				icon: 'fas fa-building',
			},
			{
				label: 'Companies',
				link: '/company',
				icon: 'fas fa-users',
			},
			{
				label: 'Providers',
				link: '/provider',
				icon: 'fas fa-dolly-flatbed',
			},
			{
				label: 'Sellers',
				link: '/seller',
				icon: 'fas fa-user-tie',
			}
		]
	},
	{
		label: 'Configuration',
		link: '#',
		icon: 'fas fa-cogs',
		children: [
			{
				label: 'Users',
				link: '/user',
				icon: 'fas fa-user-shield',
			},
			{
				label: 'Map',
				link: '/map',
				icon: 'fas fa-map',
			},
			{
				label: 'Titles',
				link: '/title',
				icon: 'fas fa-venus-mars',
			},
			{
				label: 'Vats',
				link: '/vat',
				icon: 'fas fa-percentage',
			},
			{
				label: 'PaymentTypes',
				link: '/payment-type',
				icon: 'fas fa-money-check',
			},
			{
				label: 'Printers',
				link: '/printer',
				icon: 'fas fa-print',
			},
			{
				label: 'CommentCategories',
				link: '/comment-category',
				icon: 'fas fa-comment',
			},
			{
				label: 'Areas',
				link: '/area',
				icon: 'fas fa-globe-europe',
			}
		]
	},

]
