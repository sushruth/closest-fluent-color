export enum Schemes {
  default = 'default',
  brand = 'brand',
  red = 'red',
  green = 'green',
  yellow = 'yellow',
  orange = 'orange',
  pink = 'pink',
  silver = 'silver',
  onyx = 'onyx',
  amethyst = 'amethyst',
}

export const UndefinedColor = 'Not Defined'

type Color = {
  value: string
  id: string
}

type ColorEntry = {
  token: string
  light: Color
  highContrast: Color
  dark: Color
  scheme: Schemes
}

export const colors: ColorEntry[] = [
  {
    token: 'Foreground',
    light: {
      value: '#252423',
      id: 'fc13edc9-d18d-4308-942a-52d744e82aa7',
    },
    highContrast: {
      value: '#fff',
      id: '3e6b8ca2-be7e-47b7-bd31-7f77373b7f4a',
    },
    dark: {
      value: '#fff',
      id: 'ef994cbf-926e-4859-b141-a45b13cbfc00',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background',
    light: {
      value: '#fff',
      id: '98c58495-e85b-4bf9-acc3-3d0307e29ff3',
    },
    highContrast: {
      value: '#000',
      id: '35b7f099-fb1b-46c8-add5-d01ca4264107',
    },
    dark: {
      value: '#2D2C2C',
      id: 'f8d09c43-5c60-47d2-ac5e-2f46f6daffdb',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border',
    light: {
      value: '#E1DFDD',
      id: 'a2f45a83-4059-4fee-af20-91de140dfd95',
    },
    highContrast: {
      value: '#fff',
      id: '6c0d3f39-c0c6-4dea-9edc-a98c165594dd',
    },
    dark: {
      value: '#605E5C',
      id: '224d960d-366a-4610-8012-1c5f6ce5f0e8',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Shadow',
    light: {
      value: '#000',
      id: '1d960744-e922-4716-85d6-9047c2dc8ab5',
    },
    highContrast: {
      value: '#000',
      id: '343d6b92-7c6f-4095-88aa-d36f0a84448e',
    },
    dark: {
      value: '#000',
      id: '9ec1a156-0cd7-46cb-be40-47d68ceca86f',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: '#252423',
      id: 'af0f4533-3175-4b20-bf16-efe89d37ad82',
    },
    highContrast: {
      value: '#000',
      id: '09e826a3-eaac-4b77-93be-177d0d59dbff',
    },
    dark: {
      value: '#fff',
      id: '88b17c18-90c9-4179-b873-c636ce9e30a5',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Hover',
    light: {
      value: '#F3F2F1',
      id: 'bc434f6b-3223-413f-b9f0-8b752d4bb974',
    },
    highContrast: {
      value: '#1aebff',
      id: '3266294e-b375-496f-ae01-a28a56eb85b0',
    },
    dark: {
      value: '#3B3A39',
      id: 'ec0c8ec1-b524-4b70-acf3-0317cf55732a',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Hover',
    light: {
      value: '#C8C6C4',
      id: 'b4b5c194-cdb6-48a0-ae77-68da200a1543',
    },
    highContrast: {
      value: '#1aebff',
      id: '2bf49cf9-da69-4729-a41d-3f42e52756f5',
    },
    dark: {
      value: '#8A8886',
      id: '685605ef-5801-4375-8abe-d6d76254b39c',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: '#000',
      id: '7a23a82a-0db2-4423-8f28-6e5e53baed67',
    },
    highContrast: {
      value: '#000',
      id: 'a712968c-8db4-44e7-9042-6d07ab8ced82',
    },
    dark: {
      value: '#000',
      id: '2657044a-5591-473a-b6b6-7b136c3722aa',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Active',
    light: {
      value: '#252423',
      id: 'de8d6a46-9162-4220-8203-dfeb163d7494',
    },
    highContrast: {
      value: '#1aebff',
      id: '2c0f8818-2179-47e6-97bc-a50c6fffb4ed',
    },
    dark: {
      value: '#fff',
      id: '1cae2bbe-fc6b-4d9d-9310-85801ea242e3',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Active',
    light: {
      value: '#F3F2F1',
      id: 'aaf402c1-13ad-4c4d-a41c-84f3a1dabfc6',
    },
    highContrast: {
      value: '#000',
      id: '4c3366aa-4a0d-43fa-8783-96ba51cc9585',
    },
    dark: {
      value: '#201F1F',
      id: '56edc579-c3c4-4718-93d2-5ddc2f4aa970',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Active',
    light: {
      value: '#E1DFDD',
      id: '94a6a9e8-6d22-414f-9b70-d77d797f4b8d',
    },
    highContrast: {
      value: '#1aebff',
      id: '9cbb5d55-85fb-44f9-95ce-c1c6e069d201',
    },
    dark: {
      value: '#605E5C',
      id: 'c030d2be-13dd-4a1b-910a-5cc53b135f81',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: '71beb97a-d0db-49ce-8c3e-480718ca9311',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'e459e1d6-d218-4ecb-951e-77629e395306',
    },
    dark: {
      value: UndefinedColor,
      id: '3573358c-4b15-4ff3-b3da-81f3107fbeea',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: '#252423',
      id: '5ac12734-f083-435d-bc0d-0c83ba08519f',
    },
    highContrast: {
      value: '#000',
      id: 'd8821923-4d51-45c4-887f-aeb8e761f512',
    },
    dark: {
      value: '#fff',
      id: '573e7745-12fc-4ce9-a46b-fd50e06aa78c',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Focus',
    light: {
      value: '#fff',
      id: '53af3bca-dcdf-408e-9bfa-a7f767325b96',
    },
    highContrast: {
      value: '#1aebff',
      id: '6a4f5d7d-3202-48ed-b67d-527d4e1c07f9',
    },
    dark: {
      value: '#2D2C2C',
      id: 'f8a497bd-e4b5-45eb-85a9-5ad3e866a895',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Focus',
    light: {
      value: '#000',
      id: '86699bfe-13fc-4b34-afae-1426a4c1891d',
    },
    highContrast: {
      value: '#1aebff',
      id: '3bddbcb0-9166-4a20-bfeb-b88159e6feec',
    },
    dark: {
      value: '#fff',
      id: '0b85a859-7fbe-4ca6-99b0-0bc7bea3d512',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: '84ac3bd5-e612-408c-8469-8bfb961c54aa',
    },
    highContrast: {
      value: UndefinedColor,
      id: '6c7454bc-7868-4c0f-bcd2-142875647407',
    },
    dark: {
      value: UndefinedColor,
      id: 'b57d092b-5cb3-4d9e-8067-53a0281f377c',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: '#252423',
      id: '23febce2-da47-4972-aa68-ec591b24ff95',
    },
    highContrast: {
      value: '#000',
      id: '7db89fdb-9d8c-48ef-ae7e-5beabb27979b',
    },
    dark: {
      value: '#fff',
      id: '09b72dba-1c3c-44bc-a629-5b42caac5b5a',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Pressed',
    light: {
      value: '#E1DFDD',
      id: 'f6aceff9-8039-4116-891b-767af5061a4e',
    },
    highContrast: {
      value: '#1aebff',
      id: '1d6ea785-ee84-45a8-9602-1dc974c402bd',
    },
    dark: {
      value: '#484644',
      id: '170a4e25-8467-4daf-bf9e-c67dd7f4e426',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Pressed',
    light: {
      value: '#C8C6C4',
      id: '905a668e-961a-429c-98bd-437741bea09a',
    },
    highContrast: {
      value: '#1aebff',
      id: 'bbb02762-2c64-4711-accb-9d7b237e5849',
    },
    dark: {
      value: '#8A8886',
      id: '7899124e-147a-4a97-8fb5-6fa25c930dbd',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: '30e9bd49-d99b-4225-950d-3039f1cfb9ef',
    },
    highContrast: {
      value: UndefinedColor,
      id: '8f7b4338-f2bf-4a28-afec-de71468fff93',
    },
    dark: {
      value: UndefinedColor,
      id: 'cefd9c2e-6dc6-44fb-87e5-3ce88b5e10c9',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: '#C8C6C4',
      id: 'ac9d86b7-4d24-4ac8-8484-c15d2326ba49',
    },
    highContrast: {
      value: '#000',
      id: '0a6ea1db-4c12-44b8-b2d6-0587faf3579f',
    },
    dark: {
      value: '#605E5C',
      id: '33cdbe95-f8b3-4926-bb27-6844c939ae86',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Disabled',
    light: {
      value: '#EDEBE9',
      id: '6f3cb2c7-b95a-46d7-a82d-a51a056261ad',
    },
    highContrast: {
      value: '#3ff23f',
      id: '40fb4743-6928-4b3b-839d-08e11de5f135',
    },
    dark: {
      value: '#3B3A39',
      id: '72d14206-92ac-4246-bbc1-d5b27e926dd7',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Disabled',
    light: {
      value: '#EDEBE9',
      id: 'e86cbbe0-ec02-43b0-a846-b3805aa5f562',
    },
    highContrast: {
      value: '#3ff23f',
      id: 'b9ba03fb-e7be-4fbd-8fe0-42cd0962a6df',
    },
    dark: {
      value: '#3B3A39',
      id: '2f0670f3-3c9d-46c5-9989-1cf43463851b',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: 'ae32ef68-100d-4056-a696-47abf1c1aa56',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a0c331c5-660b-492a-941d-74c9470ad8dc',
    },
    dark: {
      value: UndefinedColor,
      id: 'eed54d62-3461-4050-8808-0345b750f53d',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground 1',
    light: {
      value: '#484644',
      id: '9f9ed49a-f020-4152-8a67-a67003a90f00',
    },
    highContrast: {
      value: '#fff',
      id: '6002592c-e419-4464-a428-bcaba208b1a8',
    },
    dark: {
      value: '#C8C6C4',
      id: '19379a40-0f6d-466d-a0f6-da63c41815e5',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground 2',
    light: {
      value: '#605E5C',
      id: '004cf8f0-92f8-4eb9-821f-29b32556c6ce',
    },
    highContrast: {
      value: '#fff',
      id: 'b7112497-69b9-4c45-9828-d073d5584c28',
    },
    dark: {
      value: '#B3B0AD',
      id: '4596aa76-1795-4fb1-8b42-50e4b98d19e5',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground 3',
    light: {
      value: '#fff',
      id: 'e822b27f-d004-440e-8fa0-8bdab58630e6',
    },
    highContrast: {
      value: '#fff',
      id: '450fdf60-b739-402b-8c66-e6f5bccaae9e',
    },
    dark: {
      value: '#fff',
      id: '8fb17f30-1a70-4586-90d2-44c3065d882e',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground 4',
    light: {
      value: '#fff',
      id: 'e2aa9934-89b9-4168-bfdc-cf9919a74440',
    },
    highContrast: {
      value: '#000',
      id: '711aeb5f-38cb-40a5-b3b9-7f3f2f18bc1d',
    },
    dark: {
      value: '#fff',
      id: '68d74f5a-47b6-432d-ace4-2bb218973d5e',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background 1',
    light: {
      value: '#FAF9F8',
      id: '06fe47dc-dd3f-454c-8bc4-aae499776c34',
    },
    highContrast: {
      value: '#000',
      id: 'e5a67c8f-117b-4ead-b1cd-4a3d9b6fcf18',
    },
    dark: {
      value: '#292828',
      id: 'bb992037-538a-452b-be0c-423dfdb4d69c',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background 2',
    light: {
      value: '#F3F2F1',
      id: 'b35f6beb-43d3-4b49-9538-5d34ce345822',
    },
    highContrast: {
      value: '#000',
      id: 'ec78a307-e201-4827-aaf4-9731cfffced5',
    },
    dark: {
      value: '#201F1F',
      id: 'e43affa0-39c5-48a5-b282-0adf9d703378',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background 3',
    light: {
      value: '#EDEBE9',
      id: '6a003bd5-b594-4507-9f14-040d2552f7bc',
    },
    highContrast: {
      value: '#000',
      id: '7aac60bc-904d-4b9a-9e53-829b5fedc855',
    },
    dark: {
      value: '#3B3A39',
      id: 'be076734-2093-4e8b-a81f-b91583760b5d',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background 4',
    light: {
      value: '#F3F2F1',
      id: '3077e14d-1f35-4fa0-a7c1-53b28f7e9678',
    },
    highContrast: {
      value: '#000',
      id: 'b09c3f48-bca8-4dd1-8854-d17c1c4720af',
    },
    dark: {
      value: '#323131',
      id: 'df647037-6677-47c2-8c77-f67d11c527ac',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background 5',
    light: {
      value: '#979593',
      id: '36542542-38f7-4194-a7d9-4ba6732c4200',
    },
    highContrast: {
      value: '#ffff01',
      id: '1fc242e2-9677-4b5b-a4fe-607eed617d5e',
    },
    dark: {
      value: '#C8C6C4',
      id: '06038795-cfef-470a-a949-c662da074573',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border 1',
    light: {
      value: '#EDEBE9',
      id: '8802e0a7-9a73-45cc-adb2-c139aa91279b',
    },
    highContrast: {
      value: '#fff',
      id: '0c4aa382-dece-4595-ba07-c78000626913',
    },
    dark: {
      value: '#1B1A1A',
      id: 'e4f0cc86-1c02-4509-b8ad-09889211846e',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border 2',
    light: {
      value: '#E1DFDD',
      id: '83df5ad1-610e-4390-9410-65dd04075936',
    },
    highContrast: {
      value: '#fff',
      id: '09c8b504-4c7d-45a9-a1d2-52167ca86e4b',
    },
    dark: {
      value: '#11100F',
      id: '75c66df7-946c-40d4-8dca-1ef69fb8f354',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border 3',
    light: {
      value: '#EDEBE9',
      id: '22864d3d-a2ac-4b0e-a253-702be9f969ab',
    },
    highContrast: {
      value: '#fff',
      id: '7c069b26-c85a-43a2-9348-dbe2b50dab0a',
    },
    dark: {
      value: '#2D2C2C',
      id: '11e0e0e8-9218-47f6-9627-41a29b11eb98',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Hover 1',
    light: {
      value: '#fff',
      id: '297de79b-46d5-46ad-9e25-00b3d61e7bd9',
    },
    highContrast: {
      value: '#000',
      id: 'bb3253f6-dc6e-4394-bb77-46fa0e7326c6',
    },
    dark: {
      value: '#fff',
      id: 'f17faac3-f136-491c-84bb-5896f6f1c5c7',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Hover 2',
    light: {
      value: '#fff',
      id: 'c54df243-8991-44a0-bf0b-184a8c8455c9',
    },
    highContrast: {
      value: '#1aebff',
      id: '4be0beba-1c7d-4989-ace1-ec604488a82b',
    },
    dark: {
      value: '#fff',
      id: '1d4ba65f-1893-41b9-807a-b4dae69f6d65',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Hover 1',
    light: {
      value: '#EDEBE9',
      id: '47a44c84-dfd4-4f3f-b9a5-cf8b8f00cf87',
    },
    highContrast: {
      value: '#1aebff',
      id: '58c28b33-8d86-4e4a-b56b-1de06b72eaf0',
    },
    dark: {
      value: '#3B3A39',
      id: 'f6c8d165-c7d1-435c-8e96-e56baa68ab19',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Hover 2',
    light: {
      value: 'transparent',
      id: '9d3ba956-23fd-408d-b1ae-57e990f9b63b',
    },
    highContrast: {
      value: '#1aebff',
      id: 'fe54c985-8aeb-4ee4-90ba-d3bc819e562d',
    },
    dark: {
      value: 'transparent',
      id: 'f2641887-906e-4b4c-92b7-f5cd97d71cc8',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Hover 3',
    light: {
      value: '#EDEBE9',
      id: '2a1f9691-cc30-459f-b403-6153f995a42b',
    },
    highContrast: {
      value: '#000',
      id: 'fe30119f-f134-4d00-b7a8-ea5ed3c32f1a',
    },
    dark: {
      value: '#1B1A1A',
      id: '20ec529c-cb43-449f-bcd9-f35751e3ced5',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Hover 4',
    light: {
      value: '#FAF9F8',
      id: '8bf1f145-3ef0-4c49-a542-f4c925a8159e',
    },
    highContrast: {
      value: '#000',
      id: '2a9ba41d-8c5c-42d8-a4b3-1d2e78a1b968',
    },
    dark: {
      value: '#323131',
      id: '624a0ef9-8fea-4959-8b95-6f7ecadd72fd',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Active 1',
    light: {
      value: '#fff',
      id: 'dfb42849-80dd-40bc-a343-932048cd47c8',
    },
    highContrast: {
      value: '#000',
      id: '07e29950-8c04-4b14-959c-6b14672123f1',
    },
    dark: {
      value: '#fff',
      id: '5e0cb42b-3fcd-4890-bd8f-23439b4e4cc7',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Active 1',
    light: {
      value: '#EDEBE9',
      id: '39a18ac2-da9a-47a5-a7b9-517aa6f3991c',
    },
    highContrast: {
      value: '#1aebff',
      id: '92f586ec-912b-4a85-83ae-c0637e7cb3b4',
    },
    dark: {
      value: '#484644',
      id: '947e1308-07fd-433d-a325-16dea7bcf9fa',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Active 1',
    light: {
      value: '#EDEBE9',
      id: '346bf1ba-9da1-425d-ab54-7e329d533375',
    },
    highContrast: {
      value: '#1aebff',
      id: 'ead48481-2086-401a-9a99-07475ef42726',
    },
    dark: {
      value: '#1B1A1A',
      id: 'aa958b9e-6fb5-400b-90be-ffd357b745d4',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Active 2',
    light: {
      value: '#E1DFDD',
      id: '2973bfcb-7006-42b3-b1e2-f0bf2f3c805a',
    },
    highContrast: {
      value: '#1aebff',
      id: 'f9777af1-098c-4e7c-b151-d91b04b6bf50',
    },
    dark: {
      value: '#11100F',
      id: '47bfde1c-d314-4961-b9b8-d66b0b1b1d72',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Active 3',
    light: {
      value: '#EDEBE9',
      id: 'c27d2b49-570c-498d-88fb-0bbae11e2671',
    },
    highContrast: {
      value: '#1aebff',
      id: 'ca2e1749-bdc1-4664-995d-6482ee8f87a1',
    },
    dark: {
      value: '#2D2C2C',
      id: '2febbdf2-e2cf-4281-8be7-38283151dbde',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Focus 1',
    light: {
      value: '#484644',
      id: '355e1788-fc66-4cce-aac6-e064414bb6cb',
    },
    highContrast: {
      value: '#000',
      id: 'af071ec4-aaf7-44f9-820d-9e6fd0656895',
    },
    dark: {
      value: '#C8C6C4',
      id: 'e3ff1fc4-ceb0-4847-b459-5140aede5d05',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Focus 2',
    light: {
      value: '#605E5C',
      id: '8be1bd3e-4074-453b-bd32-09c0caf57326',
    },
    highContrast: {
      value: '#000',
      id: '771613ba-c7be-4811-97c7-b74772aed0a9',
    },
    dark: {
      value: '#B3B0AD',
      id: 'ea054b79-15c5-4f49-9f4b-372880f50c04',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Focus 3',
    light: {
      value: '#fff',
      id: 'bc6eb95b-49cf-4bd4-bfa6-2e60e0bef39b',
    },
    highContrast: {
      value: '#000',
      id: 'c0cb59ae-7c49-4e95-bc57-83026fadc875',
    },
    dark: {
      value: '#fff',
      id: '871fe7ab-3d39-46ec-a77c-a14c8ad2c174',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Focus 1',
    light: {
      value: '#FAF9F8',
      id: '209ec1af-a101-4d22-853a-a91d8470de17',
    },
    highContrast: {
      value: '#1aebff',
      id: '863e0d3e-84a7-434e-bde7-4ea0c4b12199',
    },
    dark: {
      value: '#292828',
      id: '56dc2b6e-5568-420e-8e2c-38aadf92c7c9',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Focus 2',
    light: {
      value: '#F3F2F1',
      id: 'b455720a-545c-470a-a22d-ce49d93c1322',
    },
    highContrast: {
      value: '#1aebff',
      id: 'd6b5fb24-b39f-49ac-bc17-d0ac84d5bb67',
    },
    dark: {
      value: '#201F1F',
      id: '6efa6ca9-594c-4b78-bce0-bfd53d208519',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Focus 3',
    light: {
      value: '#EDEBE9',
      id: '7b52f458-8e16-451e-8860-203ea722b445',
    },
    highContrast: {
      value: '#1aebff',
      id: '54850928-cfdd-4626-b86a-98c88506308e',
    },
    dark: {
      value: '#3B3A39',
      id: '64774b98-43b4-4343-8bd1-faef0a1b16a3',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Border Focus Within',
    light: {
      value: '#fff',
      id: '327cb638-3ef3-4951-a95f-8a85af65ba5d',
    },
    highContrast: {
      value: '#000',
      id: 'f58f29c3-eaa0-489b-89ba-8b552bd26bf5',
    },
    dark: {
      value: '#000',
      id: '5fe1ef34-e419-4805-94a3-93af482f332f',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground Disabled 1',
    light: {
      value: '#C8C6C4',
      id: '39b5cc13-a06d-4a73-a013-c2365fb3a1ef',
    },
    highContrast: {
      value: '#3ff23f',
      id: '0c710c89-ef99-46e6-9c6b-04e6ce1ac378',
    },
    dark: {
      value: '#605E5C',
      id: '5ffbc832-b830-44d2-bf25-fdbaee8f4cdd',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Background Disabled 1',
    light: {
      value: '#EDEBE9',
      id: 'ca28309e-4c85-4800-a0d7-db05cc6676d2',
    },
    highContrast: {
      value: '#000',
      id: '61899305-115f-43ca-b73b-9fd6985e8186',
    },
    dark: {
      value: '#3B3A39',
      id: 'ab8d3547-0c25-4445-b0d6-42e276cbc01f',
    },
    scheme: Schemes.default,
  },
  {
    token: 'Foreground',
    light: {
      value: '#6264A7',
      id: '90c60268-60c4-4763-9ad8-ff6f4c83f8bb',
    },
    highContrast: {
      value: '#fff',
      id: 'b6174540-8f6f-4c01-a5e7-45d3549fd480',
    },
    dark: {
      value: '#A6A7DC',
      id: '114116cd-d407-4af4-b6f3-3680fb419bfb',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background',
    light: {
      value: '#6264A7',
      id: 'e3768563-a1b2-4fef-9e90-49f805fdfcef',
    },
    highContrast: {
      value: '#fff',
      id: 'b9d5e5f5-bce6-4430-a383-cc5719572cec',
    },
    dark: {
      value: '#6264A7',
      id: '866aaf0d-3915-4053-8841-c69f56fdbf87',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border',
    light: {
      value: '#E1DFDD',
      id: '8bd942b0-610f-429a-8fee-337cda340345',
    },
    highContrast: {
      value: '#fff',
      id: '1d8ec282-f212-46c5-a793-442b90647ccb',
    },
    dark: {
      value: '#605E5C',
      id: '3e07fc21-2ac1-46a0-97e8-d464d6e9cae5',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Shadow',
    light: {
      value: '#000',
      id: '20c35a28-34e6-48f2-921a-884eb98e72f5',
    },
    highContrast: {
      value: '#000',
      id: 'e399eba8-30b3-4645-807f-c6db23c9a493',
    },
    dark: {
      value: '#000',
      id: '93b19fdf-8c48-46ae-88ed-ef05d0796d33',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: '#6264A7',
      id: '5f77886c-371c-4b26-9b6a-b4cafd243e06',
    },
    highContrast: {
      value: '#000',
      id: '3f89f910-96b6-437d-9b16-914f2ed51649',
    },
    dark: {
      value: '#A6A7DC',
      id: '3444a84c-235d-4402-b3a7-dfc60be7098c',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Hover',
    light: {
      value: '#585A96',
      id: '14df16ee-4aa2-4dce-a2d5-16a10522d9a8',
    },
    highContrast: {
      value: '#1aebff',
      id: 'a04babbc-9e87-459a-88c0-578f2af09d9d',
    },
    dark: {
      value: '#8B8CC7',
      id: '7fa83a59-ec5f-48a4-ad24-5995386cbf81',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Hover',
    light: {
      value: '#BDBDE6',
      id: '118cb500-e811-4cb3-ac5e-daf625de9b56',
    },
    highContrast: {
      value: '#1aebff',
      id: '7fd2d40d-8645-463b-86a9-17a59d5f2ec1',
    },
    dark: {
      value: '#6264A7',
      id: '051a386f-112e-4aca-8f4a-46521e5753bb',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: '#000',
      id: '286458b4-e0f1-4d5d-8944-d364140e605d',
    },
    highContrast: {
      value: '#000',
      id: 'cc75a82a-e923-4236-9503-48ffdf515f70',
    },
    dark: {
      value: '#000',
      id: '469691ee-f280-4985-92c7-9646acdb23df',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Active',
    light: {
      value: '#6264A7',
      id: 'bed9c948-51bb-498e-8ce7-7c847a26dcdd',
    },
    highContrast: {
      value: '#1aebff',
      id: 'f3a862e6-f5a1-42c7-99e6-6fb17c86e597',
    },
    dark: {
      value: '#A6A7DC',
      id: '36dc3d0f-eb1a-4e01-aa27-4b7aa8827cb2',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Active',
    light: {
      value: '#6264A7',
      id: '7e786876-c290-456b-a59e-4a2bf2b6da71',
    },
    highContrast: {
      value: '#000',
      id: '0658f5c9-eb98-48a4-89b8-3ef587cef0b2',
    },
    dark: {
      value: '#A6A7DC',
      id: '0d6fa1e7-1faf-4ae1-8ac6-72e76d1658cd',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Active',
    light: {
      value: '#E1DFDD',
      id: '26c617c1-dcbc-429b-ba38-6c908b7a7633',
    },
    highContrast: {
      value: '#1aebff',
      id: '55fc2735-5295-4033-a8a0-413f39511232',
    },
    dark: {
      value: '#605E5C',
      id: '8cee93a4-b573-4628-aa23-b93ad275b720',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: '56317abe-650f-4881-a375-b61cd7243d9f',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a9732bac-ac3a-44f2-8108-721331c17de8',
    },
    dark: {
      value: UndefinedColor,
      id: '8cfbb791-51b9-4260-8ed7-b249f907260b',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: '#6264A7',
      id: '270f673d-fdf2-4a7d-b227-037101c47a04',
    },
    highContrast: {
      value: '#000',
      id: 'f18792db-91ec-46b1-99cb-12826f85ff4a',
    },
    dark: {
      value: '#A6A7DC',
      id: '5cfd289b-2e44-49ee-a10b-ba9b9f22050e',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Focus',
    light: {
      value: '#6264A7',
      id: '7a75a380-f4d6-4134-b95e-e336c0dfa368',
    },
    highContrast: {
      value: '#1aebff',
      id: '156200ae-619d-40c6-a2eb-a2f0da4662d4',
    },
    dark: {
      value: '#6264A7',
      id: '07f27e3a-8637-479d-9653-adf41a3e21cf',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Focus',
    light: {
      value: '#000',
      id: '970625e1-bd4b-4726-a26c-4bf32706f7cf',
    },
    highContrast: {
      value: '#1aebff',
      id: '6c7c6aa6-9284-4044-b1e3-2bd3677f47eb',
    },
    dark: {
      value: '#fff',
      id: '894d04d5-cf6e-4da9-ac24-f72a363a92d4',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: '4a148e59-1702-4371-ac4b-4703dfe326ec',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'c2383242-6cb7-438a-8fdb-695f2421832f',
    },
    dark: {
      value: UndefinedColor,
      id: 'e35dc064-029e-450b-b776-a0be7fb00a75',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: '#464775',
      id: '053ab751-7393-4640-b23a-bedf5148b521',
    },
    highContrast: {
      value: '#000',
      id: 'b1fcd18a-b3e1-4c27-916c-8aee0d52172a',
    },
    dark: {
      value: '#E2E2F6',
      id: 'b58da4d0-e040-4281-9d20-f0b0367a4354',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Pressed',
    light: {
      value: '#464775',
      id: '3f10135d-18a4-4126-91a5-645932e7c20f',
    },
    highContrast: {
      value: '#1aebff',
      id: '08095743-103d-4e51-b6ad-f92b06a178de',
    },
    dark: {
      value: '#585A96',
      id: '377029f2-a0f3-40cd-9d89-0dd210bd923c',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Pressed',
    light: {
      value: '#BDBDE6',
      id: 'cfae0152-c963-4945-b516-73bcdae413be',
    },
    highContrast: {
      value: '#1aebff',
      id: '658c326a-21dd-4470-99a6-29791e3a399a',
    },
    dark: {
      value: '#464775',
      id: '49a58ea6-de50-4bbc-8a6e-9261de60cafc',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: '4ca37309-d0ea-4dca-85c6-f6ed841b7806',
    },
    highContrast: {
      value: UndefinedColor,
      id: '6cb37b8a-4993-4af8-9f19-a8d92b87c3be',
    },
    dark: {
      value: UndefinedColor,
      id: 'dd96f561-141c-4376-ba08-c63ce557cfd2',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: '#C8C6C4',
      id: '11b7b453-b0e5-4edf-aa6e-ff77e500ed0c',
    },
    highContrast: {
      value: '#000',
      id: '4de586c2-15b2-4170-b354-167bbfd5bb91',
    },
    dark: {
      value: '#605E5C',
      id: '2f3d01e4-b1d5-44b4-a700-6148f33afca0',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Disabled',
    light: {
      value: '#EDEBE9',
      id: 'ae36f327-eaf9-40b3-b445-13a2a623f5fe',
    },
    highContrast: {
      value: '#3ff23f',
      id: '4b8e9711-ba6d-4036-82c5-8c15b5816f47',
    },
    dark: {
      value: '#3B3A39',
      id: 'c557c29b-011d-4475-90fe-9638b2f122fb',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Disabled',
    light: {
      value: '#EDEBE9',
      id: '8ea7782f-4d9d-4c4e-9d91-f21d2caeedac',
    },
    highContrast: {
      value: '#3ff23f',
      id: 'fc49cb3a-78b9-44e7-b968-359f22c28df9',
    },
    dark: {
      value: '#3B3A39',
      id: 'd782e9d4-1ae6-40f2-bf59-76283b95adad',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: '1e7fa1ec-bb31-4917-a106-4def22254db7',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'd438b47c-8076-4e77-aefa-43687d8a96c4',
    },
    dark: {
      value: UndefinedColor,
      id: '7edd7cb3-02c4-4820-b31a-b4dd9c5d068d',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground 1',
    light: {
      value: '#6264A7',
      id: 'b0d6fa02-55e9-44d7-8111-6f693448e3bf',
    },
    highContrast: {
      value: '#ffff01',
      id: 'b081fbdb-d92b-44a1-8b23-c5c43bd324e2',
    },
    dark: {
      value: '#A6A7DC',
      id: '26321de6-70f5-46ab-8ba7-68c8986ad6a4',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground 2',
    light: {
      value: '#585A96',
      id: '8caf3563-fadb-4e73-b0f4-eb319bff3846',
    },
    highContrast: {
      value: '#ffff01',
      id: '47e09daa-6d61-4dcc-8474-f163c0e0ff63',
    },
    dark: {
      value: '#A6A7DC',
      id: '508f28b7-d758-491d-88d9-dfe62e9cef52',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground 3',
    light: {
      value: '#E2E2F6',
      id: '11fb6561-7cc9-4040-9dc3-bc9a0d00f870',
    },
    highContrast: {
      value: '#ffff01',
      id: '021b0020-6c56-44a1-9057-411d9dc2a2ba',
    },
    dark: {
      value: '#E2E2F6',
      id: '9a0e5053-edfc-4d8d-9814-0a01cc9c7f5a',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground 4',
    light: {
      value: '#fff',
      id: '6d29ad7e-61ac-454a-82aa-b109b1ddf33f',
    },
    highContrast: {
      value: '#000',
      id: '06a2f979-d4da-46b6-b0c1-775100e59793',
    },
    dark: {
      value: '#fff',
      id: '819806cf-87d3-42ca-aa87-ef85121ee65a',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background 1',
    light: {
      value: '#E5E5F1',
      id: 'a875bf34-f09e-4b83-bcf1-d6acd99989bc',
    },
    highContrast: {
      value: '#000',
      id: 'ed87fd35-2026-4749-b75f-90d0bbd69a4c',
    },
    dark: {
      value: '#33344A',
      id: 'd0f8f325-5c8b-4f47-abb9-c0243235d3f8',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background 2',
    light: {
      value: '#33344A',
      id: '74f898f0-2931-461f-91fd-861c1c89e52d',
    },
    highContrast: {
      value: '#000',
      id: 'bf3d053c-30d3-45a9-980b-b6f39cdde90b',
    },
    dark: {
      value: '#33344A',
      id: 'dc50f583-a93f-4faa-9c48-4749c3817044',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background 3',
    light: {
      value: '#373644',
      id: '762ccbfa-9b35-414b-ae08-4f55712c1b35',
    },
    highContrast: {
      value: '#000',
      id: '41435dbc-900c-43ca-ac65-fa82137a9493',
    },
    dark: {
      value: '#373644',
      id: '80c0aeca-43fa-4085-8b46-aa68fe9475eb',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background 4',
    light: {
      value: '#464775',
      id: '6bc2fabc-ebfc-4faf-84e2-e4c97f71c1e5',
    },
    highContrast: {
      value: '#000',
      id: '6e01a016-f359-49d2-b622-24df24433163',
    },
    dark: {
      value: '#2D2C2C',
      id: 'b4f3a668-8a18-4958-87bf-ad6658a0cfaf',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border 1',
    light: {
      value: '#E2E2F6',
      id: '7ba16fe4-d77e-4cc3-add5-3637a7f64edf',
    },
    highContrast: {
      value: '#fff',
      id: '1a2f6f6e-4a9d-4287-9b52-467ebc07ee33',
    },
    dark: {
      value: '#464775',
      id: '7140d0f5-c863-4b49-8183-6db6128dd84e',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border 2',
    light: {
      value: '#BDBDE6',
      id: '6146087f-30cf-47fb-844e-2cd94b4d8d33',
    },
    highContrast: {
      value: '#fff',
      id: '8ed839f5-6963-43f8-b064-acc3841755e1',
    },
    dark: {
      value: '#464775',
      id: '82d095e7-2a51-42f9-993e-8400034807b0',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Hover 1',
    light: {
      value: '#fff',
      id: '4c9e3112-348a-48f9-80d4-9bf9f165346a',
    },
    highContrast: {
      value: '#000',
      id: '820aea5c-732a-4a56-ba5e-993bc7df9e34',
    },
    dark: {
      value: '#fff',
      id: '18efec84-1381-4f91-9547-487307aee80d',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Hover 2',
    light: {
      value: '#E2E2F6',
      id: 'ba7630d5-7de7-4b43-bceb-4c5063bca2a9',
    },
    highContrast: {
      value: '#000',
      id: 'cfc3d280-1702-40c6-81cf-eb7450ec4caa',
    },
    dark: {
      value: '#E2E2F6',
      id: '15f61d72-a630-4a7c-8196-22dad53e7461',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Hover 1',
    light: {
      value: '#F4F4FC',
      id: '7265bcf6-44e4-4446-a687-0d99f6fd0d25',
    },
    highContrast: {
      value: '#1aebff',
      id: '31aeb921-9a93-4cf4-8f50-770472f78fc2',
    },
    dark: {
      value: '#33344A',
      id: '2e3a1d1f-8cd6-4d8f-83a2-6c277bdcff1d',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Hover 2',
    light: {
      value: '#E5E5F1',
      id: '8451c528-45df-404e-904c-afbe86b18ff9',
    },
    highContrast: {
      value: '#ffff01',
      id: '0573df70-46c1-41ca-90e5-2fad30a49725',
    },
    dark: {
      value: '#33344A',
      id: '2b357990-6400-45a5-a7f7-ee2eb9594bca',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Pressed 1',
    light: {
      value: '#fff',
      id: '9740bf99-137e-4548-89aa-1d3cce1531c4',
    },
    highContrast: {
      value: '#000',
      id: '34a9db93-1e3b-4b8f-9fc5-300f7ebe3341',
    },
    dark: {
      value: '#fff',
      id: '7c51b0ac-ee2a-48a7-9a4f-7093e52b8d51',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Active 1',
    light: {
      value: '#6264A7',
      id: '3f45ecf6-ddea-4c53-a342-ff6247567800',
    },
    highContrast: {
      value: '#000',
      id: '4d707dd4-5aaf-4be0-a095-ef92b09343ea',
    },
    dark: {
      value: '#A6A7DC',
      id: 'ce3924a0-2364-4c3f-83e9-11f88810e377',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Active 2',
    light: {
      value: '#E2E2F6',
      id: 'b23f87e0-f004-467c-aa5a-cfd652ef6d18',
    },
    highContrast: {
      value: '#1aebff',
      id: 'b08f288a-fc5f-4a27-b5d6-8cea563b5ba7',
    },
    dark: {
      value: '#E2E2F6',
      id: 'b74f2400-bcd4-427c-8cc5-b45abc32d4ea',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Active 1',
    light: {
      value: '#6264A7',
      id: 'b5a4c71a-b7d7-4864-8013-b69cb8dd390a',
    },
    highContrast: {
      value: '#1aebff',
      id: '25b6bf2a-4fce-45ab-9627-0834fec8f706',
    },
    dark: {
      value: '#A6A7DC',
      id: '201f990c-d114-43c9-84fa-3f6348035802',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Active 1',
    light: {
      value: '#E2E2F6',
      id: '4d1db2ce-e258-414e-9376-72146960ec14',
    },
    highContrast: {
      value: '#1aebff',
      id: '0acc96d1-7519-447e-bdb6-367a1c0b205c',
    },
    dark: {
      value: '#464775',
      id: 'd39eada3-e81d-4c2b-98ed-b5605b58026f',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Active 2',
    light: {
      value: '#BDBDE6',
      id: '9d7d3a6c-ab2a-44a3-bd91-4ac498667fb1',
    },
    highContrast: {
      value: '#1aebff',
      id: '789553c8-aa57-4db6-97a1-9e97ebbf6687',
    },
    dark: {
      value: '#464775',
      id: 'c84da576-fd41-4177-af17-86292d80976e',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Focus 1',
    light: {
      value: '#6264A7',
      id: '5f43a1f4-10f8-49e0-a7ca-605c0383b896',
    },
    highContrast: {
      value: '#000',
      id: 'efbf408f-36dd-480f-99c7-cf36c6cb39e2',
    },
    dark: {
      value: '#A6A7DC',
      id: 'f9b214b8-beaf-41c4-a213-28e8c4c09d17',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Focus 2',
    light: {
      value: '#585A96',
      id: '0ac01f8c-9cc9-4644-97c9-404eda3a7a87',
    },
    highContrast: {
      value: '#000',
      id: 'c56f9b0d-127d-4414-9eed-a1c8ecd5e6ef',
    },
    dark: {
      value: '#A6A7DC',
      id: '1b164fbc-ce0c-486d-8991-81a1e4ec7441',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Focus 3',
    light: {
      value: '#E2E2F6',
      id: 'e11a0ac8-5870-4a8d-b4d0-8d3dba137ca4',
    },
    highContrast: {
      value: '#000',
      id: '86e9a542-169c-44d8-8505-c0dfdb44d8fe',
    },
    dark: {
      value: '#E2E2F6',
      id: 'b59805e8-18fa-46ee-a18e-18e730f45da2',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Focus 4',
    light: {
      value: '#fff',
      id: 'e7a4f167-61d9-430f-9893-302e39c87661',
    },
    highContrast: {
      value: '#000',
      id: '4e8cc2f0-8ef4-46cd-82a8-eeeebd81c55f',
    },
    dark: {
      value: '#fff',
      id: '0c2cd837-bce7-49a5-b061-c6c63bcfa319',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Focus 1',
    light: {
      value: '#E5E5F1',
      id: '684ece24-3a94-49a6-9763-3f8e690672a8',
    },
    highContrast: {
      value: '#1aebff',
      id: '1f38e931-2f2f-404f-8bc3-58e6e3d0dd71',
    },
    dark: {
      value: '#33344A',
      id: '16fcb2ff-23b1-42cd-95ff-5f9aa11681b7',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Focus 2',
    light: {
      value: '#33344A',
      id: '39b2bc6d-2b5e-46bd-a163-ef9a91f856b4',
    },
    highContrast: {
      value: '#1aebff',
      id: 'dd16ee5c-4365-4a8e-b9ee-a9091f7dfc44',
    },
    dark: {
      value: '#33344A',
      id: '1f27da79-ac2c-48d9-84af-dda0d1b4f1b4',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Focus 3',
    light: {
      value: '#373644',
      id: '4a1382ba-f2ef-4b14-9a32-9d6cfefd55bb',
    },
    highContrast: {
      value: '#1aebff',
      id: '6fb05f79-02ac-4c6e-b340-ab62e53185d3',
    },
    dark: {
      value: '#373644',
      id: '3548ec81-5961-420d-b015-07e9d06d84d1',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Focus Within',
    light: {
      value: '#fff',
      id: '1d026e38-e3f1-4b5d-8c99-fc83c84437be',
    },
    highContrast: {
      value: '#000',
      id: 'add5d52f-8736-435c-b80b-f9780bcb8e99',
    },
    dark: {
      value: '#000',
      id: 'e230ba1c-0720-49ea-bbde-33f80de15ada',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Border Focus 1',
    light: {
      value: '#6264A7',
      id: '5773adce-79c8-48d1-8529-6be7ba43e05c',
    },
    highContrast: {
      value: '#1aebff',
      id: 'a7a8709a-d71a-4d0a-b717-d91ac3bb0e6a',
    },
    dark: {
      value: '#A6A7DC',
      id: '2ac10371-ff66-4815-b3df-dd66931da2e1',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground Disabled 1',
    light: {
      value: '#C8C6C4',
      id: '418c1375-d938-427f-bbbc-fd1972e4dbb3',
    },
    highContrast: {
      value: '#3ff23f',
      id: '379737da-6fe3-4605-ac39-c27ba93a2521',
    },
    dark: {
      value: '#605E5C',
      id: 'e2e64ea0-18b1-44c0-84cb-e744875c1755',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Background Disabled 1',
    light: {
      value: '#EDEBE9',
      id: '19814702-82f1-4dd0-bb83-0ff36bc5e6fc',
    },
    highContrast: {
      value: '#000',
      id: 'a7e74ba9-18f6-484d-b2e2-b73209f7397d',
    },
    dark: {
      value: '#3B3A39',
      id: 'fea1e335-ffa0-4571-ac5f-2ffb5b427a3a',
    },
    scheme: Schemes.brand,
  },
  {
    token: 'Foreground',
    light: {
      value: '#C4314B',
      id: '5b7d52b2-d017-49be-88a5-87a3057aacfb',
    },
    highContrast: {
      value: '#fff',
      id: 'adcd4393-0f09-4d7d-ba9b-751560dc461a',
    },
    dark: {
      value: '#F9526B',
      id: '693b0edb-0c6c-4827-ba35-79b1ccb241aa',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background',
    light: {
      value: '#C4314B',
      id: 'cb41107e-be18-44a2-bd81-f96a05b00e66',
    },
    highContrast: {
      value: '#fff',
      id: 'f2693088-832f-496a-b73b-93ca809c41f3',
    },
    dark: {
      value: '#E73550',
      id: 'c228c9d7-7368-4e30-82ea-14ef29ac4774',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Border',
    light: {
      value: '#F3D6D8',
      id: '7e5dc065-2a90-4c15-bc04-a82a9bb7f6e8',
    },
    highContrast: {
      value: '#fff',
      id: 'b4f53c39-7cb4-4493-b4f5-0a55e76b3fc7',
    },
    dark: {
      value: '#1E040A',
      id: 'b7df895e-68bf-426d-b67a-51bce3597a9d',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Shadow',
    light: {
      value: UndefinedColor,
      id: '93efa23c-e414-45cc-b064-1636fd5fe6c0',
    },
    highContrast: {
      value: UndefinedColor,
      id: '77a0c979-3407-4be6-aca4-d94e2a721463',
    },
    dark: {
      value: UndefinedColor,
      id: '8f693031-edc1-4031-abf5-9ce25d5e4126',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: '#fff',
      id: 'ea1aa074-4f94-4ab3-aa70-dca1c1838204',
    },
    highContrast: {
      value: '#000',
      id: '28f44f34-d49a-4ce9-b50f-f0983b4d51ba',
    },
    dark: {
      value: '#fff',
      id: 'b510b52b-fa44-404c-8968-bf9c03bc8b84',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background Hover',
    light: {
      value: 'rgba(167,32,55,0.9)',
      id: '173935ef-66a4-4a79-912d-197424c1f0ef',
    },
    highContrast: {
      value: '#1aebff',
      id: 'b46b6de9-5277-4dbc-94ac-eb3994a2192c',
    },
    dark: {
      value: 'rgba(167,32,55,0.9)',
      id: 'a21f8da2-56bc-4ddc-a9a8-3a3a5ae67de6',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Border Hover',
    light: {
      value: UndefinedColor,
      id: '79fe6afc-9aa0-461e-9948-f2f18c8afd89',
    },
    highContrast: {
      value: UndefinedColor,
      id: '5e43eaf1-9ffa-4cda-8644-9c7f6ad408e4',
    },
    dark: {
      value: UndefinedColor,
      id: '88e064d1-bab8-4353-821b-b144305bd73b',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: UndefinedColor,
      id: '5ec574b9-cdff-4e95-8bdc-a48b94bf6f41',
    },
    highContrast: {
      value: UndefinedColor,
      id: '767759ff-4271-4aa3-8ac0-4ae162f13d66',
    },
    dark: {
      value: UndefinedColor,
      id: '22d733b0-65ef-41f1-ad3f-7dee842b16d6',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Foreground Active',
    light: {
      value: UndefinedColor,
      id: 'e9074521-7168-40b3-b04e-0f890c59c562',
    },
    highContrast: {
      value: UndefinedColor,
      id: '46380690-f5ca-4d42-99c0-bab031294014',
    },
    dark: {
      value: UndefinedColor,
      id: '46979ffc-9678-44ed-aeb7-f6e19102ff7d',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background Active',
    light: {
      value: UndefinedColor,
      id: 'd32ab482-0e53-493f-b1da-bdf6e338f383',
    },
    highContrast: {
      value: UndefinedColor,
      id: '16533021-aa27-41cc-8810-092abcf36ed9',
    },
    dark: {
      value: UndefinedColor,
      id: '2670631c-114e-46d9-b217-738d0d90095c',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Border Active',
    light: {
      value: UndefinedColor,
      id: 'dda94140-ef82-4f2a-a19f-7a51f54f39ae',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'e3342686-5702-4884-8d7e-e66b7f0ef588',
    },
    dark: {
      value: UndefinedColor,
      id: '30491c8d-f565-4f12-b1d6-55f6143b522d',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: 'c6c04fe1-c233-41a2-bc38-d86c82d2507b',
    },
    highContrast: {
      value: UndefinedColor,
      id: '6cd33ac8-5d4a-4cd4-931a-8e0e847e945f',
    },
    dark: {
      value: UndefinedColor,
      id: 'a46e1fd7-75ed-40bd-83f1-9485a4d33415',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: UndefinedColor,
      id: 'c3c7ee65-94e1-4fdd-819f-2760c7af642a',
    },
    highContrast: {
      value: UndefinedColor,
      id: '4ef7bf30-08f8-42c9-95d1-def079ec0ea8',
    },
    dark: {
      value: UndefinedColor,
      id: 'd2deb5ae-f803-407a-98e5-8c4650f14c0a',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background Focus',
    light: {
      value: UndefinedColor,
      id: '7ed78596-5e48-43ff-841a-ef7a4c94f3c1',
    },
    highContrast: {
      value: UndefinedColor,
      id: '948bd850-1e06-4333-a0f7-65c5c1d5e57e',
    },
    dark: {
      value: UndefinedColor,
      id: '897b67c6-e7bd-4452-b29a-ef1005fa78dd',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Border Focus',
    light: {
      value: UndefinedColor,
      id: 'efbd64c9-37cd-4c07-b88f-4cbef71ae6e4',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'c30edb91-044c-4e87-9a15-187e946cc829',
    },
    dark: {
      value: UndefinedColor,
      id: '3f80b4de-a895-48ee-8c56-90ea5229c535',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: '8ddc1ef5-c8ef-4896-ba02-f8cce6a5a815',
    },
    highContrast: {
      value: UndefinedColor,
      id: '0ef0cea1-3aef-4ede-a44a-012c5851309c',
    },
    dark: {
      value: UndefinedColor,
      id: 'd1fb88e6-4679-4eed-93cf-4b1679cd6ab1',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: '#fff',
      id: '96967910-a0fe-45cc-9559-f5fd4ea008e1',
    },
    highContrast: {
      value: '#000',
      id: '12eacadc-c9a1-4086-8de6-f4d90c1995a8',
    },
    dark: {
      value: '#fff',
      id: '477ebffa-c554-42b6-8ef4-827c17e59947',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background Pressed',
    light: {
      value: 'rgba(142,25,46,0.9)',
      id: '2b1419e0-ac09-4ac1-84ec-e4e8ca82008e',
    },
    highContrast: {
      value: '#1aebff',
      id: 'cedf408a-ffd1-429c-bdb1-1a7f22199918',
    },
    dark: {
      value: 'rgba(142,25,46,0.9)',
      id: '05e00e9f-516e-42fd-a854-76d59600b4e5',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Border Pressed',
    light: {
      value: UndefinedColor,
      id: '6c9bd339-0df5-4f6f-9b83-09f64ed03232',
    },
    highContrast: {
      value: UndefinedColor,
      id: '8514b1ec-ec9f-4379-aa99-fe0e4fb3326e',
    },
    dark: {
      value: UndefinedColor,
      id: 'bbc8df5e-9d76-420f-9909-90050e150bee',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: '7c079855-49c8-4121-bd48-8fa93dc89c60',
    },
    highContrast: {
      value: UndefinedColor,
      id: '19ac34f7-0076-4563-8ba6-b96efb9e88b6',
    },
    dark: {
      value: UndefinedColor,
      id: '61c3a863-388b-4dc7-8b6c-af54b7e9e7ee',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: UndefinedColor,
      id: '37d88058-5493-4d4f-a7fc-89dff60ff3a8',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a930cf3e-1a72-47f7-8e42-410277203be0',
    },
    dark: {
      value: UndefinedColor,
      id: '4914c770-16db-41bd-9c8a-c4219108fedd',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background Disabled',
    light: {
      value: UndefinedColor,
      id: 'e3df978b-e54a-489e-9acc-c48ec6953a07',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'ece5408b-474e-480d-84ee-8b0863aebe08',
    },
    dark: {
      value: UndefinedColor,
      id: 'a247bbba-4809-41cf-8770-035dbed1d972',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Border Disabled',
    light: {
      value: UndefinedColor,
      id: '514bcd65-6edf-40e8-b0dc-1a423521345c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '9fa4abf4-5d45-4c16-b352-46a2dcaae1b6',
    },
    dark: {
      value: UndefinedColor,
      id: 'f6062b38-a9c8-4250-a56c-c6c644b5c91a',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: '1db72e9c-b9ac-4ef1-b1e6-ecf95a28f1a2',
    },
    highContrast: {
      value: UndefinedColor,
      id: '2995872d-e78b-497d-931a-93c2303abe12',
    },
    dark: {
      value: UndefinedColor,
      id: '6c1cb9f2-eb03-4a0d-ae0a-e26ac9d53900',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Foreground 1',
    light: {
      value: '#fff',
      id: '5a71940c-7c38-48c2-8bee-5790d9c604b5',
    },
    highContrast: {
      value: '#000',
      id: '2aa9a064-5395-40ec-a512-0e28be6365dc',
    },
    dark: {
      value: '#fff',
      id: '904bc783-ec8d-408d-a40c-334f3926eb15',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Foreground 2',
    light: {
      value: '#fff',
      id: 'e58cd075-8b8d-4588-b157-eb394cfd2f46',
    },
    highContrast: {
      value: '#000',
      id: '550df57d-dfb8-404c-abc6-dc6c24c9f3ab',
    },
    dark: {
      value: '#201F1F',
      id: '59391466-6654-4c21-83fa-bce6d985c6db',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background 1',
    light: {
      value: '#FCF4F6',
      id: 'efcccb06-6a75-49ea-bf1e-a6653c889581',
    },
    highContrast: {
      value: '#000',
      id: 'dd3757de-bcbe-4c5e-ab0b-e456c8597003',
    },
    dark: {
      value: '#3E1F25',
      id: '3c957f13-8482-4a5c-aff8-8b7459d2611e',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background 2',
    light: {
      value: 'rgba(196,49,75,0.9)',
      id: 'ae4375b0-5fd7-488b-a778-137d86a1f2a2',
    },
    highContrast: {
      value: '#000',
      id: '70bd2887-a799-48b5-9b54-0e8132c7c4ec',
    },
    dark: {
      value: 'rgba(196,49,75,0.9)',
      id: '2c00b81e-e54d-4807-bfed-fd908c57aab5',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background 3',
    light: {
      value: '#C4314B',
      id: '3062cc93-d65e-498c-a2b3-732816cb7163',
    },
    highContrast: {
      value: '#ffff01',
      id: '59ff7fab-1848-44f3-a57b-793bd435eb1b',
    },
    dark: {
      value: '#C4314B',
      id: 'd77642b1-362e-49c8-bb0e-73e7b2189944',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Background Hover 1',
    light: {
      value: '#C4314B',
      id: '4b0cbe99-57c4-4668-8898-5c4edb59210c',
    },
    highContrast: {
      value: '#1aebff',
      id: '7d1e2201-eed8-4f95-aad2-17e0b2b79ad4',
    },
    dark: {
      value: '#C4314B',
      id: '3c23117a-2cda-4d87-84e1-bed4325dddbe',
    },
    scheme: Schemes.red,
  },
  {
    token: 'Foreground',
    light: {
      value: '#237B4B',
      id: '35c0307c-2673-4a01-aa62-22be3a19fe77',
    },
    highContrast: {
      value: '#fff',
      id: '7265803f-c882-40e9-85fb-cefd31dae355',
    },
    dark: {
      value: '#92C353',
      id: '6ddb2060-156e-4174-8ec0-07fe9dafc5f7',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Background',
    light: {
      value: '#6BB700',
      id: '10c0ead3-e466-4395-9c02-0871c3dae21f',
    },
    highContrast: {
      value: '#fff',
      id: 'e0c0406e-c584-4d5c-9f8c-208d28630c75',
    },
    dark: {
      value: '#92C353',
      id: '34557177-3ab3-4d3c-af69-1fb0566c783c',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Border',
    light: {
      value: UndefinedColor,
      id: 'f234f0e6-1be5-434d-b3b1-78d78a9140e8',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a70042c2-b162-4a78-9929-1800e79ecab7',
    },
    dark: {
      value: UndefinedColor,
      id: '956c3a3a-c0ba-461a-8c6d-98048c77c914',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Shadow',
    light: {
      value: UndefinedColor,
      id: '791c0599-be3b-4103-a886-843554fbac7b',
    },
    highContrast: {
      value: UndefinedColor,
      id: '616a3bc6-c391-4d03-b488-2df8cd89219d',
    },
    dark: {
      value: UndefinedColor,
      id: '4a26a524-5ebd-4c3f-83d9-799c5060eeaa',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: UndefinedColor,
      id: '1c997fda-2e19-4a81-b44d-96e48b7519ab',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'bab312a1-62a4-42d3-b575-a613e130349a',
    },
    dark: {
      value: UndefinedColor,
      id: '3deb5660-c4b2-4d64-b1f4-55cad5be0bbc',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Background Hover',
    light: {
      value: UndefinedColor,
      id: '7d02a4a7-4c52-4f52-86e8-d903cdd411df',
    },
    highContrast: {
      value: UndefinedColor,
      id: '3e07b612-786a-44b1-be7e-d80104586813',
    },
    dark: {
      value: UndefinedColor,
      id: '2750b52a-6a79-46e5-9217-8dbd0adb0bec',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Border Hover',
    light: {
      value: UndefinedColor,
      id: '2ed0339b-b1c2-4e61-9681-198d431f3c82',
    },
    highContrast: {
      value: UndefinedColor,
      id: '2a39bbdf-1c93-47b0-a979-89f647bad557',
    },
    dark: {
      value: UndefinedColor,
      id: '7e204763-209b-491f-8fc0-9adbc5e64b6e',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: UndefinedColor,
      id: 'bc95b9e2-573f-4a32-80ac-5272beb640a9',
    },
    highContrast: {
      value: UndefinedColor,
      id: '9c41b795-f55e-4008-8995-1df4f28aa97c',
    },
    dark: {
      value: UndefinedColor,
      id: 'dfd6e201-b2fb-4043-9e67-fa1377a1c6d9',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Foreground Active',
    light: {
      value: UndefinedColor,
      id: '8d956514-e5f0-448a-a949-c1f124a7d4d6',
    },
    highContrast: {
      value: UndefinedColor,
      id: '42c11ce1-a0cd-4905-b79b-ddf90a1d0c5c',
    },
    dark: {
      value: UndefinedColor,
      id: '00376421-229f-4454-9df1-34d633a78363',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Background Active',
    light: {
      value: UndefinedColor,
      id: '3f105e33-e06b-48af-a6c8-dcf7eef8d75d',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'd2bd12c0-2009-44f9-b396-18fc26757044',
    },
    dark: {
      value: UndefinedColor,
      id: 'acff05e9-c790-4e56-99d9-eedd92cae3f4',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Border Active',
    light: {
      value: UndefinedColor,
      id: 'a503518c-7a4e-40b8-9014-c5c29cf7a08d',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'de1724d8-e315-40a8-8cdc-c3983b1c769c',
    },
    dark: {
      value: UndefinedColor,
      id: '4b8943e3-56c8-42c2-a81f-3be7e96bea4e',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: '6d85c00e-d58d-4b08-a1b9-273af3c5430c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '263e102b-fcd8-4ed9-9b1e-6fff2f7a9180',
    },
    dark: {
      value: UndefinedColor,
      id: 'cfccc025-af9f-4249-a94f-ff6997ce2b15',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: UndefinedColor,
      id: 'bf78231d-cae6-46d9-ae69-00321842cccf',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'cdff8ef2-8483-4706-acbd-7532266bccf6',
    },
    dark: {
      value: UndefinedColor,
      id: '195e6161-e4d9-4e9f-83ce-a27373418945',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Background Focus',
    light: {
      value: UndefinedColor,
      id: '9bb4f513-d762-4871-9c58-e0692cd814d1',
    },
    highContrast: {
      value: UndefinedColor,
      id: '897c12f0-90eb-4b6b-8686-6f99e1faaee0',
    },
    dark: {
      value: UndefinedColor,
      id: 'efe218ab-1d97-4565-aa53-44352cd11b3f',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Border Focus',
    light: {
      value: UndefinedColor,
      id: '90e9e1e5-40b8-4e60-a051-59ea422bb4f1',
    },
    highContrast: {
      value: UndefinedColor,
      id: '545d5744-21e7-4903-8558-b4883cff44af',
    },
    dark: {
      value: UndefinedColor,
      id: '99730de1-45da-4e2f-99c9-d231bfd2d683',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: 'c6059ad5-06b9-454a-b98b-5f038a044b1f',
    },
    highContrast: {
      value: UndefinedColor,
      id: '1965b4d4-8e59-4452-be05-6c0de6eff02f',
    },
    dark: {
      value: UndefinedColor,
      id: '23dce21c-1aa6-4124-83c5-e6f550662145',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: UndefinedColor,
      id: '6e2ea578-a77d-4a73-8daf-b0af1c90813b',
    },
    highContrast: {
      value: UndefinedColor,
      id: '701fb2a2-b890-483f-8eba-9afb950b81a9',
    },
    dark: {
      value: UndefinedColor,
      id: 'c66df0a9-3548-43b6-b6a6-ba110b63156c',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Background Pressed',
    light: {
      value: UndefinedColor,
      id: '7712697e-504a-4608-9aae-b00eac9d799a',
    },
    highContrast: {
      value: UndefinedColor,
      id: '1a776b33-8507-4ece-b26f-5df008fb3365',
    },
    dark: {
      value: UndefinedColor,
      id: '818ae593-1166-4d53-81f3-970046a3443e',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Border Pressed',
    light: {
      value: UndefinedColor,
      id: '9bbe27ef-f2f0-40df-895c-d5ef0f968541',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a4243bbc-2f3b-401c-965d-4ecab62e97ad',
    },
    dark: {
      value: UndefinedColor,
      id: 'aa5181f0-90cf-4f50-ae9f-daf41e16e040',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: 'f37680c6-4d7f-48e1-b0bd-2df07ed04bb1',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'f5f94bbe-d55a-4264-bf74-53c8dbb1ed2e',
    },
    dark: {
      value: UndefinedColor,
      id: '11bcb8d3-e80f-4a58-a539-398386fa1f91',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: UndefinedColor,
      id: '9548f4ae-b7b7-45b5-8bf1-0d439ba51141',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'e47e4ab1-114f-4566-ae11-997c932cad59',
    },
    dark: {
      value: UndefinedColor,
      id: 'c15acd16-cd15-4d6d-b717-e246292fad11',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Background Disabled',
    light: {
      value: UndefinedColor,
      id: 'dd8b03fe-a6c3-4d80-b066-c6fd6f400e85',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'f9ae9b84-0363-4fea-b3e9-5b49dceba1b4',
    },
    dark: {
      value: UndefinedColor,
      id: 'aab0ae86-0b54-4333-ad6d-e7f1420ad4d0',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Border Disabled',
    light: {
      value: UndefinedColor,
      id: 'fb290c3d-3396-4efb-a2d5-148cc1f6332a',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'f9d17be4-78dd-4bd2-a478-13a2be2f5035',
    },
    dark: {
      value: UndefinedColor,
      id: '8d83855b-1270-40ea-b361-81859a20ff84',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: 'c6e7cfae-395a-4e79-89b7-352cc43119d0',
    },
    highContrast: {
      value: UndefinedColor,
      id: '8551443a-1e35-4598-aad6-e6373ab12181',
    },
    dark: {
      value: UndefinedColor,
      id: '541d8bb3-28fe-463d-aa45-cbf97f692c31',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Foreground 1',
    light: {
      value: '#fff',
      id: '6c1037bb-162a-48d6-9f91-dd5b26bb766d',
    },
    highContrast: {
      value: '#000',
      id: 'eb726e72-17a6-4328-851d-1565c0703390',
    },
    dark: {
      value: '#201F1F',
      id: '287a3b41-f7e2-4cac-9dca-58360abacca9',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Foreground 2',
    light: {
      value: '#13A40E',
      id: '9e4c9657-e3e0-4ed8-a42b-270b455494d6',
    },
    highContrast: {
      value: '#fff',
      id: 'da37cf3f-34ad-4912-ac26-69cd8f6b2581',
    },
    dark: {
      value: '#92C353',
      id: '0e9525c4-4d72-44e6-975b-f84de7acbf03',
    },
    scheme: Schemes.green,
  },
  {
    token: 'Foreground',
    light: {
      value: '#F9EC02',
      id: 'f28e898c-d4e2-4659-8588-2097ee82ed27',
    },
    highContrast: {
      value: '#fff',
      id: 'f5c43ed8-fe71-4070-917a-6a703ed3aa03',
    },
    dark: {
      value: '#F9EC02',
      id: '9081b00c-31ed-4f40-8745-93e2de7308c4',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Background',
    light: {
      value: '#FFAA44',
      id: '10a8b674-c4c9-4fd9-8c68-999e76d63306',
    },
    highContrast: {
      value: '#fff',
      id: '34c4a234-4ee6-4587-a019-f123982c7093',
    },
    dark: {
      value: '#F8D22A',
      id: '4eec1f1c-e20c-437d-a12e-132479c32273',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Border',
    light: {
      value: UndefinedColor,
      id: '0f318c81-c2db-4167-a484-aa8971a6f7fa',
    },
    highContrast: {
      value: UndefinedColor,
      id: '860cedcc-a1f9-4ffd-ba34-ee8a18ee4363',
    },
    dark: {
      value: UndefinedColor,
      id: 'dfcb2bc2-1fc1-493b-ac2d-2cd1d64770ba',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Shadow',
    light: {
      value: UndefinedColor,
      id: '1b37e6ce-b670-421d-b962-95674bb68ae9',
    },
    highContrast: {
      value: UndefinedColor,
      id: '24886ad4-ab3d-4aa2-ac69-78af21d7ea76',
    },
    dark: {
      value: UndefinedColor,
      id: '3c20f89f-a3b6-42ab-90f3-5625a90ef710',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: UndefinedColor,
      id: 'ae4abcd7-b90f-4be6-863f-746b803be98b',
    },
    highContrast: {
      value: UndefinedColor,
      id: '23641c49-b434-4bb3-947b-71c8187cd3d2',
    },
    dark: {
      value: UndefinedColor,
      id: '34d1db6d-ac5b-4171-b98d-dc5e102c3812',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Background Hover',
    light: {
      value: UndefinedColor,
      id: '4d0411d7-0626-4a06-b49b-6cf2a35b6b9c',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'de643966-d96d-4a2d-a6b2-f3b7ae82576f',
    },
    dark: {
      value: UndefinedColor,
      id: '4a5a3dcc-f011-47e6-b1c9-335f15a80db8',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Border Hover',
    light: {
      value: UndefinedColor,
      id: '06c6b772-1bd5-4191-9a56-759978b43993',
    },
    highContrast: {
      value: UndefinedColor,
      id: '3c4a9b0e-7e85-4cb8-97f7-0a21c7496d94',
    },
    dark: {
      value: UndefinedColor,
      id: '4e4a4cf6-b639-454a-97c4-0ee4c02f36a3',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: UndefinedColor,
      id: 'eb179387-3203-4ba2-b262-9159dce818a2',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'e149d0b0-c11f-470b-aed9-0580b629dfdd',
    },
    dark: {
      value: UndefinedColor,
      id: 'f836a70d-5296-48bc-8475-8929f6dd84b0',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Foreground Active',
    light: {
      value: UndefinedColor,
      id: '48c6d402-d9c6-4ba9-8756-5f69a6305569',
    },
    highContrast: {
      value: UndefinedColor,
      id: '064ba22b-3791-4f7d-aea3-2dce50089491',
    },
    dark: {
      value: UndefinedColor,
      id: '584a7caa-bd5f-4719-a625-cc67abbd0901',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Background Active',
    light: {
      value: UndefinedColor,
      id: 'ffb9b21a-71a1-4f11-9efc-e432e94e4936',
    },
    highContrast: {
      value: UndefinedColor,
      id: '887f9051-2e27-4197-882c-9a20a3294c44',
    },
    dark: {
      value: UndefinedColor,
      id: '80257437-abd0-4fa6-b499-112658412ba0',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Border Active',
    light: {
      value: UndefinedColor,
      id: '5dca029f-4230-4f0f-9c43-c9ad8bcf0544',
    },
    highContrast: {
      value: UndefinedColor,
      id: '27e3e6fd-484a-4870-bfab-895bda508106',
    },
    dark: {
      value: UndefinedColor,
      id: '3637df8e-5cb9-4518-9918-a8ee4adbd696',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: 'c44a8989-03ca-4e76-8a41-62046aa6e971',
    },
    highContrast: {
      value: UndefinedColor,
      id: '112ec31b-66cb-4896-a19d-8d4442ec0b1b',
    },
    dark: {
      value: UndefinedColor,
      id: 'fb0d30b3-dc5d-4161-b563-69b01944e5c7',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: UndefinedColor,
      id: '13fbe512-0dc6-4777-a0f3-8021412ab53c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '83506079-cf06-4fee-b616-63c41aa33506',
    },
    dark: {
      value: UndefinedColor,
      id: '297779d3-b09e-4b84-adc6-7ed3994aa356',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Background Focus',
    light: {
      value: UndefinedColor,
      id: 'b75cc7f2-8ce9-4e60-9cb2-31c0cb8d4a9e',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'd3f45caa-fadc-4c47-803e-891bd931b58f',
    },
    dark: {
      value: UndefinedColor,
      id: '83d9f884-a147-41bd-a0ab-35c71225fdfa',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Border Focus',
    light: {
      value: UndefinedColor,
      id: '0bdce490-1da6-4131-a9fb-c2d596b31c91',
    },
    highContrast: {
      value: UndefinedColor,
      id: '5b2ec9fd-57ab-43f6-8440-a4f79bda6085',
    },
    dark: {
      value: UndefinedColor,
      id: 'e40bc8e6-9c2f-41e7-9e7f-2442f80ffddd',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: 'f7064c49-b939-4990-b3ba-bc07632e9a0c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '50cd1c91-87e6-4ece-b397-793c0daf4a08',
    },
    dark: {
      value: UndefinedColor,
      id: 'f6545cdb-2f47-4f81-b4c5-b8a86d48a227',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: UndefinedColor,
      id: '31e1be68-0edb-41da-8060-886cb3811986',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'dca68fe5-8e94-4f21-814f-82c80308f47c',
    },
    dark: {
      value: UndefinedColor,
      id: 'ddcce540-4507-4edb-82e7-fee91668f4c9',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Background Pressed',
    light: {
      value: UndefinedColor,
      id: 'cb8ab437-57d7-4f20-a8bd-c02264c79032',
    },
    highContrast: {
      value: UndefinedColor,
      id: '869344c0-8036-4aa7-aa92-69a100222220',
    },
    dark: {
      value: UndefinedColor,
      id: 'aa4e5cf3-22e3-4397-a26a-b9b897090a03',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Border Pressed',
    light: {
      value: UndefinedColor,
      id: 'f3bd5cef-938d-450c-9d5f-1a56ebefdc7d',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'b3573e36-272a-4c4d-9062-3e6d9ced6c0c',
    },
    dark: {
      value: UndefinedColor,
      id: '693fdc22-ec1a-41fb-ae1a-84a289817b00',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: 'f274b17d-1563-4a59-836f-dfb77b959e90',
    },
    highContrast: {
      value: UndefinedColor,
      id: '1b7136b9-7981-4bfd-81d1-d619574e57b1',
    },
    dark: {
      value: UndefinedColor,
      id: '3647f8be-4b21-4f05-994d-07af6ea4c8a3',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: UndefinedColor,
      id: '8bec8eb0-cb61-4c51-967f-b00dfd3c6ed1',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'fab56998-2f89-4aab-9f93-deeb7c983ac1',
    },
    dark: {
      value: UndefinedColor,
      id: 'cad4c378-ac03-42de-92f2-eaa6e4b732b4',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Background Disabled',
    light: {
      value: UndefinedColor,
      id: '9037aaed-e515-424d-8987-1f62e684254c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '48edcc51-a432-4c8f-a395-f974fe9bf61d',
    },
    dark: {
      value: UndefinedColor,
      id: '2bdfe129-ffce-467c-be1c-bd4f609dad07',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Border Disabled',
    light: {
      value: UndefinedColor,
      id: '23da2496-6d58-4e89-b051-71c535fbe2ab',
    },
    highContrast: {
      value: UndefinedColor,
      id: '502933bb-000b-45bf-88e6-d783d94f12ac',
    },
    dark: {
      value: UndefinedColor,
      id: 'bfe6e325-aa7d-4e5c-9df6-c954aa290356',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: '9952054b-4492-4ed5-bfaf-f81b5a56d3c7',
    },
    highContrast: {
      value: UndefinedColor,
      id: '6b038fc1-c599-44c2-81fd-c067addc00ad',
    },
    dark: {
      value: UndefinedColor,
      id: 'a2bf6779-21a2-47d3-98ba-7218bb24072c',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Foreground 1',
    light: {
      value: '#201F1F',
      id: 'f00190f0-3927-486c-8e8c-74806a936332',
    },
    highContrast: {
      value: '#000',
      id: '38136708-b8b0-4bf1-846b-110d0a32a76c',
    },
    dark: {
      value: '#201F1F',
      id: 'b49091bf-3f35-400a-b6cc-0ac5370834a3',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Foreground 2',
    light: {
      value: '#fff',
      id: '7b3016e3-eb7a-4750-aa40-29a75bd4fbcf',
    },
    highContrast: {
      value: '#000',
      id: '6149760d-1e93-42f4-9e27-9d83ad101aad',
    },
    dark: {
      value: '#201F1F',
      id: 'ce6ccb9e-8ff2-461c-ac83-e41d3f174e4b',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Background 1',
    light: {
      value: '#FBF6D9',
      id: '07e01f86-5624-43b2-92d1-82e5b2451750',
    },
    highContrast: {
      value: '#FBF6D9',
      id: 'ca17ae0a-d2be-4b86-8b33-a43e668f9e66',
    },
    dark: {
      value: '#605E5C',
      id: 'a207d9b2-b410-4474-9de9-c04980f399b8',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Background 2',
    light: {
      value: '#FFB900',
      id: '80ab4220-28c6-44c8-bce9-a0a83ed4dd4c',
    },
    highContrast: {
      value: '#fff',
      id: 'aa0da017-c740-4403-928b-39e693b94ce2',
    },
    dark: {
      value: '#FFB900',
      id: '18c43b1b-3b1a-460b-bdfd-08a472fa6937',
    },
    scheme: Schemes.yellow,
  },
  {
    token: 'Foreground',
    light: {
      value: '#CC4A31',
      id: 'a1812076-0320-43a7-bc0b-31ee9ed3883b',
    },
    highContrast: {
      value: '#ffff01',
      id: '272689ad-13cc-48bf-b88e-8ba304d81c72',
    },
    dark: {
      value: '#E97548',
      id: 'd4a39263-83c8-408f-9e97-417d2abb5528',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Background',
    light: {
      value: '#CC4A31',
      id: '97fbaa1c-ab18-445e-a9b5-f6f09ba2a9b8',
    },
    highContrast: {
      value: '#ffff01',
      id: '96a2e40c-3a5c-4d3b-9a39-8e1e4fb3cb56',
    },
    dark: {
      value: '#E97548',
      id: 'e51b9eb0-91cc-4df5-b612-736385e13885',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Border',
    light: {
      value: '#EDC2A7',
      id: '9ff813ba-463b-42cb-873b-b8bff7887543',
    },
    highContrast: {
      value: '#1aebff',
      id: 'ce4d9f48-4806-4996-925e-7a63fb8368bb',
    },
    dark: {
      value: '#8A8886',
      id: 'e609192c-3847-4e2e-963e-a8cf2c6e24b7',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Shadow',
    light: {
      value: UndefinedColor,
      id: '7358c828-d05e-4c4c-9419-82f183531d2e',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'c4b24f4c-d48a-40ba-8b20-352817481a8a',
    },
    dark: {
      value: UndefinedColor,
      id: '0dd0689a-2cd4-4f10-9b15-4075f7ac7b81',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: UndefinedColor,
      id: '444efa73-534e-40ad-a90e-2873db87632a',
    },
    highContrast: {
      value: UndefinedColor,
      id: '896e6bca-a46f-49c6-9883-c3e0523fe0e6',
    },
    dark: {
      value: UndefinedColor,
      id: 'b5dae842-c3a6-4d65-a0c8-a3aebe1d7861',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Background Hover',
    light: {
      value: UndefinedColor,
      id: '1dfaf64f-9b66-4514-8465-bbe6003ea84e',
    },
    highContrast: {
      value: UndefinedColor,
      id: '0823f173-fc5a-442d-8a4a-16b1efa43bf2',
    },
    dark: {
      value: UndefinedColor,
      id: 'f897fc02-c1cd-4ddd-a543-d0d950285f91',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Border Hover',
    light: {
      value: UndefinedColor,
      id: 'd35b8fc8-bdad-4d1e-a350-b0c2581ac66f',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'fa5e7aa3-1e1e-4b10-890b-ae4af65ec1c1',
    },
    dark: {
      value: UndefinedColor,
      id: 'cfa5c67b-1389-4ce0-9f11-52ae5e5bf4d6',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: UndefinedColor,
      id: '91c81ce2-6baf-477d-a736-2d912245d77a',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'db07f31f-2879-414d-8202-14a895c2ec81',
    },
    dark: {
      value: UndefinedColor,
      id: 'f75cb890-d3fd-4243-8080-39a953187f1b',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Foreground Active',
    light: {
      value: UndefinedColor,
      id: 'c943dd09-41ea-4686-b911-394bf4b2df88',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'b6c022c2-a09c-499f-8e85-f9661e1b234a',
    },
    dark: {
      value: UndefinedColor,
      id: 'c5dbdad8-b903-4651-998c-eb371f2707a7',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Background Active',
    light: {
      value: UndefinedColor,
      id: 'edbea2bf-8f69-4cba-b263-ad2a05a74f31',
    },
    highContrast: {
      value: UndefinedColor,
      id: '3f115392-e296-4e66-a0a0-4318eac93f97',
    },
    dark: {
      value: UndefinedColor,
      id: '0e3e9752-19e5-4861-8f1a-7b2580d0712f',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Border Active',
    light: {
      value: UndefinedColor,
      id: 'd998f678-fd4d-4ab6-8c7b-54ea78c8a957',
    },
    highContrast: {
      value: UndefinedColor,
      id: '47486800-f144-40a4-aa9c-8326958a90cc',
    },
    dark: {
      value: UndefinedColor,
      id: '476c1cc7-4628-43c9-b228-98c4e59db66d',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: '2e28da5a-4578-4a0d-869d-1374e6150f6c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '46c23765-3d39-4232-82e7-c12c94134352',
    },
    dark: {
      value: UndefinedColor,
      id: 'a5c3363c-e91c-4811-b4eb-68bb649e1ea2',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: UndefinedColor,
      id: '819861fa-32b9-4cff-844a-d96607da5804',
    },
    highContrast: {
      value: UndefinedColor,
      id: '2267e76f-2e4c-4b39-b294-c65a587289b9',
    },
    dark: {
      value: UndefinedColor,
      id: '96c2c9f3-f4ec-45d4-8f20-96d26444cf8e',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Background Focus',
    light: {
      value: UndefinedColor,
      id: '5a6db8f6-3df6-443b-9a9c-391e42350bc3',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'ed40583e-cd2f-4d43-bfb5-e1d59908dbf1',
    },
    dark: {
      value: UndefinedColor,
      id: '39eac090-c545-4a80-b168-94df02e9ca11',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Border Focus',
    light: {
      value: UndefinedColor,
      id: 'f562330d-7eae-4129-b493-386ce9dee2c9',
    },
    highContrast: {
      value: UndefinedColor,
      id: '4cafa6d9-22c4-4551-b734-7428e604715a',
    },
    dark: {
      value: UndefinedColor,
      id: '27bee01e-49cf-4af1-8af3-ed193bd620ce',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: 'a8afea44-b036-412c-aeca-0c8201ef6a1e',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a7315be3-8d27-4e96-bcea-fe29638096bd',
    },
    dark: {
      value: UndefinedColor,
      id: '668e371c-a6ec-42a3-89d5-8bf78b302f86',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: UndefinedColor,
      id: '9883f305-c1f1-443c-9c6b-e47dfa551952',
    },
    highContrast: {
      value: UndefinedColor,
      id: '24dd58a2-492e-4ca8-bbc2-d09e2aa147e8',
    },
    dark: {
      value: UndefinedColor,
      id: 'f86ad26e-ed53-4805-8a23-0123066a567c',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Background Pressed',
    light: {
      value: UndefinedColor,
      id: 'c4247abc-76d3-473b-98ba-cd36ee76257d',
    },
    highContrast: {
      value: UndefinedColor,
      id: '3b7b248e-e30b-485c-8b06-6a84a255dd37',
    },
    dark: {
      value: UndefinedColor,
      id: '6eef6b42-7bc0-4732-9aac-ad30f215dce2',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Border Pressed',
    light: {
      value: UndefinedColor,
      id: '576697f7-9da9-40be-90b0-a39471cb44d8',
    },
    highContrast: {
      value: UndefinedColor,
      id: '243c11e9-dde8-4f58-94b6-050f5365bc05',
    },
    dark: {
      value: UndefinedColor,
      id: '49458e26-4d16-4020-ae34-7282cfeaeab7',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: 'c44a0981-1540-4f85-b740-855ec5d30236',
    },
    highContrast: {
      value: UndefinedColor,
      id: '08dc80f4-a994-4024-80ba-752cde86e6e4',
    },
    dark: {
      value: UndefinedColor,
      id: '61bb852d-df3a-4593-bc4d-06f51a2553f7',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: UndefinedColor,
      id: '4e01684a-77d0-4150-9211-04744f9e2f26',
    },
    highContrast: {
      value: UndefinedColor,
      id: '1716d836-9f9b-4e44-b80b-812c43f0b905',
    },
    dark: {
      value: UndefinedColor,
      id: 'd35c063f-a29b-455d-b3b7-132f4b10dda9',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Background Disabled',
    light: {
      value: UndefinedColor,
      id: '781bf925-c016-4dee-b1ab-2259ded02167',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'dc89ab36-6600-4e25-a84d-5398adf2a4eb',
    },
    dark: {
      value: UndefinedColor,
      id: '93af9145-8a0b-4b89-b03f-f3c1c4e1d11a',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Border Disabled',
    light: {
      value: UndefinedColor,
      id: '79821268-3a53-4038-8e03-2ea8e14feb9e',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'b699c6ed-6d35-474b-bd32-e760d08886a0',
    },
    dark: {
      value: UndefinedColor,
      id: '73853e3a-ee87-4a78-821e-1b3597db5d8f',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: 'd09452a2-bea3-415e-b2b2-6b1bac327762',
    },
    highContrast: {
      value: UndefinedColor,
      id: '1553458e-635b-4a23-96b2-724d262b8332',
    },
    dark: {
      value: UndefinedColor,
      id: 'f38492f9-f8da-44f3-a99f-67f5179852ce',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Foreground 1',
    light: {
      value: '#E97548',
      id: '67fa3e91-535f-49c7-b94b-837c066378ce',
    },
    highContrast: {
      value: '#ffff01',
      id: '0f730e40-0e6b-4de4-961e-58c744b8775b',
    },
    dark: {
      value: '#E97548',
      id: 'e8fbdd44-ef06-4dbc-852e-97dfb2821e8b',
    },
    scheme: Schemes.orange,
  },
  {
    token: 'Foreground',
    light: {
      value: '#943670',
      id: 'ce9cf336-5157-4eae-8318-96325063a95d',
    },
    highContrast: {
      value: '#000',
      id: '98b6beb8-3690-4576-820f-17ce1fb17da5',
    },
    dark: {
      value: '#EC6FAE',
      id: '61fe1e1c-b7d7-4bdd-b0a9-1bdce785db9e',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Background',
    light: {
      value: '#FCF2FA',
      id: '2d3593ba-94ae-4647-a891-af10dec65744',
    },
    highContrast: {
      value: '#fff',
      id: '16d85398-6649-4a8a-9945-f53d9fd71532',
    },
    dark: {
      value: '#3E2D3B',
      id: '9619b2fc-2b52-48cb-baef-813a4b3cf52d',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Border',
    light: {
      value: '#F1DFEE',
      id: '117b7496-58e4-4e3e-b1f1-31704ee81ac1',
    },
    highContrast: {
      value: '#fff',
      id: '2e5b6060-d143-437e-99d8-7599b0365e04',
    },
    dark: {
      value: '#1F191D',
      id: 'ec0adda1-6264-4091-bd9d-4d6600e086bd',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Shadow',
    light: {
      value: UndefinedColor,
      id: '8f9bc2c2-b617-4075-b992-b9d678da24d0',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'b3ebc1c0-fa97-449f-821a-aa1f2e975513',
    },
    dark: {
      value: UndefinedColor,
      id: 'c13b98bc-1c4c-433a-b04f-63ed38057e43',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: UndefinedColor,
      id: 'bdfdfb4a-8203-4ae9-b96e-dc66be13c4ea',
    },
    highContrast: {
      value: UndefinedColor,
      id: '00768940-3afa-48c9-a204-3d383ad88ab4',
    },
    dark: {
      value: UndefinedColor,
      id: '7ba2739b-e7b8-46ab-a26d-a293b6df8e68',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Background Hover',
    light: {
      value: UndefinedColor,
      id: '331747b0-a46c-4680-aba1-2724eaf7f289',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'fef987ff-48c4-4bac-b07e-3323b6b01bd7',
    },
    dark: {
      value: UndefinedColor,
      id: '8655fb3e-c798-49e7-8e9f-1cc5ff6a0528',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Border Hover',
    light: {
      value: UndefinedColor,
      id: '8d1b7a09-a282-4837-811c-b39af9f77a62',
    },
    highContrast: {
      value: UndefinedColor,
      id: '328221b3-08ee-44f1-b131-b63e5b4c9ffc',
    },
    dark: {
      value: UndefinedColor,
      id: '0093c32b-98ec-45d0-8d3e-20c428e834c3',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: UndefinedColor,
      id: 'f46c38bb-4e56-4b46-8b66-d08645e55e97',
    },
    highContrast: {
      value: UndefinedColor,
      id: '33201fa1-65e4-458e-83b3-f5206d9e95d7',
    },
    dark: {
      value: UndefinedColor,
      id: 'c6595363-3329-44e5-8d25-1418526fa2c8',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Foreground Active',
    light: {
      value: UndefinedColor,
      id: '8ef87f33-04c9-433d-bb3e-8ecf2ae44007',
    },
    highContrast: {
      value: UndefinedColor,
      id: '9e91fb3b-0eda-4334-b48c-0a91ac2e0a65',
    },
    dark: {
      value: UndefinedColor,
      id: '016e61f7-a76a-4a63-937f-cdb469562f3f',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Background Active',
    light: {
      value: UndefinedColor,
      id: 'cb923551-2aad-4f11-962b-9e2c2e014e21',
    },
    highContrast: {
      value: UndefinedColor,
      id: '594b8ddb-f6f7-4a5b-b380-203741c03544',
    },
    dark: {
      value: UndefinedColor,
      id: '3fc97ea0-b5f1-49af-95cc-db39dcc42cfe',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Border Active',
    light: {
      value: UndefinedColor,
      id: '6d684f22-6d02-46a9-988f-f42101f17e2b',
    },
    highContrast: {
      value: UndefinedColor,
      id: '61c54334-4f8f-4b98-9d57-2e0c0c62e31f',
    },
    dark: {
      value: UndefinedColor,
      id: '64689ec7-d8fc-4362-b687-05a484b7fd96',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: '3308d03d-6d2b-461a-9ac4-f3954d823ec9',
    },
    highContrast: {
      value: UndefinedColor,
      id: '793f54bd-8a0e-4788-b4a0-1b09f159d9e2',
    },
    dark: {
      value: UndefinedColor,
      id: 'c817fb27-f31f-4cc5-88d5-8a2c262ffede',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: UndefinedColor,
      id: '982fb8ed-9cd2-4479-8f5a-e164d4e1406b',
    },
    highContrast: {
      value: UndefinedColor,
      id: '8ec8d1f3-d382-4941-88a4-4c09b5e28490',
    },
    dark: {
      value: UndefinedColor,
      id: '6b19e04c-3e55-48b8-9c3e-bfea2d2551da',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Background Focus',
    light: {
      value: UndefinedColor,
      id: '94aaf338-5b95-47de-9b46-8a9f02a15185',
    },
    highContrast: {
      value: UndefinedColor,
      id: '18fe5363-8718-45f7-b8c8-b31ba6562ee8',
    },
    dark: {
      value: UndefinedColor,
      id: 'e889e8d3-ef2e-474a-95ea-48e34e54919f',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Border Focus',
    light: {
      value: UndefinedColor,
      id: '6e9d46fd-7449-416f-9cd2-712daf3a97ba',
    },
    highContrast: {
      value: UndefinedColor,
      id: '51bdce3e-4f9f-42ee-97c6-d4430403f6b8',
    },
    dark: {
      value: UndefinedColor,
      id: '4a8eaa52-09e9-4a63-8eb6-e261788890d1',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: 'db7f696d-335c-4d93-9d17-3a5bdc7284f0',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'd4936746-dcf3-45ed-8b87-43fcaa140923',
    },
    dark: {
      value: UndefinedColor,
      id: 'eee34f8b-633d-4e87-a490-b63dc3cdbbee',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: UndefinedColor,
      id: '82784e1c-5d5f-421e-8fd0-eb663903a5bf',
    },
    highContrast: {
      value: UndefinedColor,
      id: '7a93b4fe-7001-4118-812a-ec9918bd8d0a',
    },
    dark: {
      value: UndefinedColor,
      id: '00f5cfcf-5043-4122-ba35-510cafbfe7b4',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Background Pressed',
    light: {
      value: UndefinedColor,
      id: '598735ab-c649-4bdc-8a97-5fb757d37ce1',
    },
    highContrast: {
      value: UndefinedColor,
      id: '0ce86827-39ab-43ca-bf23-9823fe520554',
    },
    dark: {
      value: UndefinedColor,
      id: '7f77f928-27cd-43b2-b3a4-31cd4b01e3e0',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Border Pressed',
    light: {
      value: UndefinedColor,
      id: 'c77bd503-6d34-485b-a5e3-9e28bc9a47a6',
    },
    highContrast: {
      value: UndefinedColor,
      id: '78275725-5614-49f2-8e7d-9b5487a319a5',
    },
    dark: {
      value: UndefinedColor,
      id: '98774e4b-62ab-423b-b59e-2963f194a70e',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: '54cb22f1-ead2-4a4d-812d-d729b1d2102e',
    },
    highContrast: {
      value: UndefinedColor,
      id: '954d9074-20ea-445b-a8d3-bf8216136703',
    },
    dark: {
      value: UndefinedColor,
      id: 'd6159f55-3152-4cf7-a26a-910eea318571',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: UndefinedColor,
      id: 'd936cddc-1b20-4584-b7a5-515e7ccf55da',
    },
    highContrast: {
      value: UndefinedColor,
      id: '833326fc-49aa-4bc8-8ca2-761451e3648a',
    },
    dark: {
      value: UndefinedColor,
      id: 'cbc5283a-95ab-4342-aab9-b007c4a75985',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Background Disabled',
    light: {
      value: UndefinedColor,
      id: 'cc0fa20d-40d6-4c8d-8370-d879d9c5024c',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'c47da7c9-3c91-4c8a-aad2-bb28e40d8bf4',
    },
    dark: {
      value: UndefinedColor,
      id: '923ffd9b-a091-4f05-9af5-0769dad37e13',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Border Disabled',
    light: {
      value: UndefinedColor,
      id: '54644205-33a9-424f-89be-2734160d83ac',
    },
    highContrast: {
      value: UndefinedColor,
      id: '3c811a31-38b6-4dd9-a2f5-59a2c3cc2543',
    },
    dark: {
      value: UndefinedColor,
      id: '9dd5f7a6-0015-4d80-88ab-3245418adddf',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: 'b30aa2bb-8d10-4629-bfb7-628108f4d35c',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'f7ba2128-d764-4a14-9195-1f270be2e22f',
    },
    dark: {
      value: UndefinedColor,
      id: '85c2cf13-e9e2-4597-88d5-01b6363b7287',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Foreground 1',
    light: {
      value: '#B4009E',
      id: '4b8a97b0-d8e4-4618-b429-56a87da3088a',
    },
    highContrast: {
      value: '#fff',
      id: '9356d721-afeb-4088-97bb-61de0d9c03fc',
    },
    dark: {
      value: '#E959D9',
      id: '16874459-758e-4fe6-b410-5035da74edf2',
    },
    scheme: Schemes.pink,
  },
  {
    token: 'Foreground',
    light: {
      value: '#fff',
      id: '6d611832-4532-4cbe-a7d4-8481a4ecdfea',
    },
    highContrast: {
      value: '#fff',
      id: '3c296562-23aa-4957-903d-bc2431277624',
    },
    dark: {
      value: '#fff',
      id: 'effb4928-5a23-479b-8db9-e412953dc524',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Background',
    light: {
      value: 'transparent',
      id: 'f4805e50-43b0-4d96-9b33-ac7fdd168de9',
    },
    highContrast: {
      value: '#000',
      id: '2ee8db7c-f311-4084-b3db-d66554ad5024',
    },
    dark: {
      value: 'transparent',
      id: 'e928d44a-969f-4f67-b244-f856d0ca28c5',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Border',
    light: {
      value: 'rgba(255,255,255,0.3)',
      id: '9d85b14e-5de7-4a43-89e8-20754ccd2989',
    },
    highContrast: {
      value: '#fff',
      id: '131de38e-be6d-4833-a38a-da5bbd64f570',
    },
    dark: {
      value: 'rgba(255,255,255,0.3)',
      id: '66459bdf-11d3-4fec-9083-c1054fb86833',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Shadow',
    light: {
      value: UndefinedColor,
      id: 'd84ca694-5991-4286-bf88-752b27eb6f4c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '65a50e0e-e212-4e68-b59d-8801236f0f36',
    },
    dark: {
      value: UndefinedColor,
      id: '7700d5c3-d127-4c08-bb15-43889c1f3958',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: '#fff',
      id: '2849c579-d0c6-4d2f-b362-74f9278aab08',
    },
    highContrast: {
      value: '#000',
      id: 'ecd93e75-ef99-4e67-a9d4-fb30673f7281',
    },
    dark: {
      value: '#fff',
      id: '1e53bbf9-b552-4625-b266-72d62990707b',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Background Hover',
    light: {
      value: 'rgba(255,255,255,0.1)',
      id: 'edb0dd7a-749c-4815-908c-5a8e1261d9f3',
    },
    highContrast: {
      value: '#1aebff',
      id: 'b73deec3-2d6f-4d22-9df6-906fd3124d04',
    },
    dark: {
      value: 'rgba(255,255,255,0.1)',
      id: '1d3a0278-e7f6-4824-b46f-7810d78db096',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Border Hover',
    light: {
      value: 'rgba(255,255,255,0.3)',
      id: '3890a22d-d4e7-482d-ad0a-9d25f70bd405',
    },
    highContrast: {
      value: '#fff',
      id: 'b8da6227-74c9-4741-a2ff-65175c98a9e3',
    },
    dark: {
      value: 'rgba(255,255,255,0.3)',
      id: '7367cba7-d217-420b-9f70-4d09cba13a95',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: UndefinedColor,
      id: '31eff789-862e-40e8-8c45-bb492c84a146',
    },
    highContrast: {
      value: UndefinedColor,
      id: '7bca22fe-67b5-44cd-bc3d-941252810bb3',
    },
    dark: {
      value: UndefinedColor,
      id: '4dd58590-7049-430d-9066-70f2e7ba7ab6',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Foreground Active',
    light: {
      value: UndefinedColor,
      id: '13d34b54-5967-49d2-b1a9-f4e9b141fea2',
    },
    highContrast: {
      value: UndefinedColor,
      id: '47b213e0-bbd4-4350-905b-3a10ee140928',
    },
    dark: {
      value: UndefinedColor,
      id: 'ca8ca4f4-506d-4a43-9bb8-bf338991cf8f',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Background Active',
    light: {
      value: UndefinedColor,
      id: '4595344d-78b6-4a38-8df0-48bff89c2c06',
    },
    highContrast: {
      value: UndefinedColor,
      id: '4a9580ca-058e-42ec-97f8-d21b913dfb15',
    },
    dark: {
      value: UndefinedColor,
      id: 'c83b0294-726e-41cb-b9d1-63c18dc3f183',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Border Active',
    light: {
      value: UndefinedColor,
      id: '885097f4-66c3-448f-beb4-e3987adea719',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'fa8a29ad-4423-4118-8c3f-6f392eb28f66',
    },
    dark: {
      value: UndefinedColor,
      id: '8e3df388-4bc2-41ee-ba78-ff42aadd9af3',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: 'b0a5a0ba-0ca9-4096-b6d7-f06a8a251063',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'd2c1f5af-359c-4e55-844f-6df455cfc9bf',
    },
    dark: {
      value: UndefinedColor,
      id: '737d6a34-0eab-4b69-9d38-aebca4d13532',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: UndefinedColor,
      id: 'a2b46348-6e90-44b2-b365-eeaaa8a189d6',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'afe0fbb8-b3e4-4aa0-917a-997c7bf1a783',
    },
    dark: {
      value: UndefinedColor,
      id: '350ebcff-0b01-4fae-a4ab-744f1af074a6',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Background Focus',
    light: {
      value: UndefinedColor,
      id: 'd170c2fb-6497-4892-923f-c0fbb01b2642',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'f5dddc1a-3cad-4edb-905b-ec626bc5c1b5',
    },
    dark: {
      value: UndefinedColor,
      id: '1e1a7494-5206-4071-a5e1-d260a48073df',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Border Focus',
    light: {
      value: UndefinedColor,
      id: 'cd0b0068-7ae8-4101-8d20-e8b3c2d1cd99',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'b69bb38e-cb24-4b98-bfab-d2fe501134df',
    },
    dark: {
      value: UndefinedColor,
      id: 'dfacbef5-7faf-4609-ac03-f89f09cfc43b',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: 'aa564e5a-6bbc-4d9e-8f0c-f54555d2f02d',
    },
    highContrast: {
      value: UndefinedColor,
      id: '6e5cb94c-70c4-4e4a-8351-2cf1c76495c9',
    },
    dark: {
      value: UndefinedColor,
      id: '2f3d367d-036c-43d4-a798-397ff5c11b18',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: '#fff',
      id: 'a486cef8-9c80-4918-8346-b64e1bf8be3a',
    },
    highContrast: {
      value: '#000',
      id: '1321868c-c3c7-4d6f-86c3-f2e4b275b6de',
    },
    dark: {
      value: '#fff',
      id: 'df075a0a-ce75-4298-94f6-d4e2c7b1b226',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Background Pressed',
    light: {
      value: 'rgba(255,255,255,0.2)',
      id: '59474a8d-a743-438a-92b7-f6a45e596ab9',
    },
    highContrast: {
      value: '#1aebff',
      id: 'a4ac4690-5e00-45b6-af97-bcfc8c6b176f',
    },
    dark: {
      value: 'rgba(255,255,255,0.2)',
      id: 'cd940e28-8e68-4ddf-8ada-a9f89a3ed012',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Border Pressed',
    light: {
      value: 'rgba(255,255,255,0.3)',
      id: '318cb79a-c59d-4880-a62e-23383da2ef67',
    },
    highContrast: {
      value: '#fff',
      id: '94642cfc-1606-409b-9d99-e84c5c81bcac',
    },
    dark: {
      value: 'rgba(255,255,255,0.3)',
      id: '3afe291b-895f-4c41-8b92-2dde967d83c2',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: 'feeb9260-7ed1-42bb-8c38-9c3b06937875',
    },
    highContrast: {
      value: UndefinedColor,
      id: '0deb76b2-26ab-42ed-ab5f-b76f47c22d7e',
    },
    dark: {
      value: UndefinedColor,
      id: '35e9b6e3-aed4-438f-8e0e-64cc906627e5',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: 'rgba(255,255,255,0.3)',
      id: '849a26b0-b976-4b37-8014-19c8aef4c62d',
    },
    highContrast: {
      value: '#3ff23f',
      id: 'e554b528-cb72-4457-b232-3c46e4ebcb1c',
    },
    dark: {
      value: 'rgba(255,255,255,0.3)',
      id: 'f5e7b9a3-4e2b-4281-97fb-9655154f3b66',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Background Disabled',
    light: {
      value: 'rgba(255,255,255,0.05)',
      id: '3f46853b-bbe4-4f74-ab8c-0013cb810baf',
    },
    highContrast: {
      value: '#000',
      id: '8bbac1f4-0bd5-4c6a-a5db-0bef4a91d9cd',
    },
    dark: {
      value: 'rgba(255,255,255,0.05)',
      id: '87d85735-8c67-455f-a1e1-5c5cecd37f5a',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Border Disabled',
    light: {
      value: UndefinedColor,
      id: 'fcf87d5d-ac58-43d7-8ba6-615cf127dac8',
    },
    highContrast: {
      value: '#3ff23f',
      id: '6da0a354-e8c7-40bf-866c-1daa5dcf475f',
    },
    dark: {
      value: UndefinedColor,
      id: '786b6610-6569-4887-bf53-157e45199f11',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: '71ef7a8c-9292-454d-8364-370b54a2c485',
    },
    highContrast: {
      value: UndefinedColor,
      id: '4c0b383c-9574-4fb4-9a26-5c4240fe464b',
    },
    dark: {
      value: UndefinedColor,
      id: '77044ed2-021a-4522-866e-e64075a040f3',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Foreground 1',
    light: {
      value: 'rgba(255,255,255,0.75)',
      id: 'cfe29d8c-3afe-447f-bb73-278c86daf59f',
    },
    highContrast: {
      value: '#fff',
      id: 'bf8aeae9-6a57-46ec-9ada-a9461063494b',
    },
    dark: {
      value: 'rgba(255,255,255,0.75)',
      id: 'c38d9059-b2b7-44fc-925d-127c162ea361',
    },
    scheme: Schemes.silver,
  },
  {
    token: 'Foreground',
    light: {
      value: UndefinedColor,
      id: '6d13df9f-d684-41a1-b907-55d7c2491fbd',
    },
    highContrast: {
      value: UndefinedColor,
      id: '9edaeb76-862d-40ab-95aa-2387d11c0076',
    },
    dark: {
      value: UndefinedColor,
      id: '435c80a4-eb64-44b3-a931-690dfe1d27bc',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Background',
    light: {
      value: 'rgba(41,40,40,0.9)',
      id: '82234902-4a91-4445-9971-44e28a12f20c',
    },
    highContrast: {
      value: '#000',
      id: 'c70e7baf-aa8b-46da-8654-47376a15de0f',
    },
    dark: {
      value: 'rgba(41,40,40,0.9)',
      id: 'cb10db14-59d4-416b-83ce-c9a114b72feb',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Border',
    light: {
      value: 'rgba(27,26,26,0.9)',
      id: '22699951-c56c-4878-8514-6dc75df7e8dd',
    },
    highContrast: {
      value: '#fff',
      id: '4dad3bb2-2a9e-415c-b79c-e852b9ac3e1f',
    },
    dark: {
      value: 'rgba(27,26,26,0.9)',
      id: '297b50d8-4d02-4fe0-97c9-e168d19a3d2a',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Shadow',
    light: {
      value: UndefinedColor,
      id: '70807b9a-e2f3-4fe8-98d7-d480a26c5b15',
    },
    highContrast: {
      value: UndefinedColor,
      id: '1863a572-44cd-4547-be9c-ab5290c98344',
    },
    dark: {
      value: UndefinedColor,
      id: '735eb64d-22ad-4e69-8ee0-a8e3efbf8a5a',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: UndefinedColor,
      id: '9d6d17e2-306d-49f4-b47e-eb968a48cd34',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'f14b9043-5578-42e9-a3f8-26b4f080fcef',
    },
    dark: {
      value: UndefinedColor,
      id: '497653fd-c852-4243-8b06-7c6a9d933e9a',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Background Hover',
    light: {
      value: UndefinedColor,
      id: '3f58d705-24e8-4c73-b374-49f5b901b603',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'ae606630-95f4-4502-a6dc-83787b064b3d',
    },
    dark: {
      value: UndefinedColor,
      id: '76c92713-592a-4daf-ba1a-bb50ed29b227',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Border Hover',
    light: {
      value: UndefinedColor,
      id: 'dc3d5cbb-ca4e-4d1a-8994-c348bfacb7ba',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'b6b67d38-0dfb-4f44-82b2-1d5952aff1d1',
    },
    dark: {
      value: UndefinedColor,
      id: '05812232-d22b-4c1b-b470-c4e0b624ebb5',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: UndefinedColor,
      id: '885d40f0-dc2f-47b7-a481-f97ad3765f20',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'fa881822-d441-43b1-9e5b-1ec91895d078',
    },
    dark: {
      value: UndefinedColor,
      id: 'c9ed9269-ace9-4161-a473-c97a968a33e9',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Foreground Active',
    light: {
      value: UndefinedColor,
      id: 'b2a894d1-82c5-40d2-a45b-c6b8d44b8f5a',
    },
    highContrast: {
      value: UndefinedColor,
      id: '5f8c5ff6-006f-4814-92e0-10757d8a0725',
    },
    dark: {
      value: UndefinedColor,
      id: '3bacc64c-5292-48ec-bbdd-28c0ec19bf64',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Background Active',
    light: {
      value: UndefinedColor,
      id: '61ebcd6a-76b5-47a4-80d7-408335796426',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'f36e8e9c-303f-4c3c-b1a5-985799225d32',
    },
    dark: {
      value: UndefinedColor,
      id: '49850c63-6670-4fd3-8483-a093274f5053',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Border Active',
    light: {
      value: UndefinedColor,
      id: 'ef2889e1-da5c-420f-9c9c-fe93e0862f65',
    },
    highContrast: {
      value: UndefinedColor,
      id: '2580dc26-11e9-4183-a7de-554c7c80fb3d',
    },
    dark: {
      value: UndefinedColor,
      id: 'b9fef62a-263b-4be2-9e74-8f24d9d4bb5d',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: '3466bce0-87a5-4937-a9f1-bcb1f8bdca44',
    },
    highContrast: {
      value: UndefinedColor,
      id: '5c0e13fd-d16b-4ce7-90aa-8efed0c0f2ef',
    },
    dark: {
      value: UndefinedColor,
      id: '17afaa03-d524-4cef-8881-5cb54cb91156',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: UndefinedColor,
      id: '602c15ac-6f6b-42b0-ba46-f65cb01d2900',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'ad61a0f8-739b-4312-9e38-0fde765c4a98',
    },
    dark: {
      value: UndefinedColor,
      id: 'e28603d6-54e9-46f4-82b4-20dfc8a477d5',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Background Focus',
    light: {
      value: UndefinedColor,
      id: '232daa1d-17ce-4e71-a97c-221f5b4bdf29',
    },
    highContrast: {
      value: UndefinedColor,
      id: '8bf305ab-39a5-464d-a80e-938f54838cd3',
    },
    dark: {
      value: UndefinedColor,
      id: '1d33bdba-d6a5-4cf5-8bc8-546b0d2f2bf5',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Border Focus',
    light: {
      value: UndefinedColor,
      id: 'e265972d-f918-462f-9bb9-f600eb84f1a6',
    },
    highContrast: {
      value: UndefinedColor,
      id: '2dee5ee0-2788-4763-bd91-8a3d8113a8c6',
    },
    dark: {
      value: UndefinedColor,
      id: '9be0d3ed-0200-4e48-8203-d842697909fb',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: 'ebf86e6d-5b88-416a-8ed2-f8fd93110105',
    },
    highContrast: {
      value: UndefinedColor,
      id: '972dc7d5-a7f1-4c9c-99f8-03537baa1613',
    },
    dark: {
      value: UndefinedColor,
      id: 'dde938a1-71f1-42f7-b3a0-d2c2ca4dfb93',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: UndefinedColor,
      id: 'aa5c0069-87a4-4f54-ab7c-e57e108ca912',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'e363d7db-39e9-458b-99db-854bf226db62',
    },
    dark: {
      value: UndefinedColor,
      id: '8c729bf1-22c1-4adc-82bd-1a4f3c5be681',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Background Pressed',
    light: {
      value: UndefinedColor,
      id: 'b2e4a9b2-5872-48f2-ab5f-63f649cde1c9',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'e382cb75-6a48-45ce-89f2-91fd49cefc16',
    },
    dark: {
      value: UndefinedColor,
      id: '4724b672-6fc3-47d1-b9fe-32a3f2ccd720',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Border Pressed',
    light: {
      value: UndefinedColor,
      id: 'fdc79260-0d39-4e11-bbb9-ec618ec5ee4c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '8c54aa1d-0076-420b-b3bf-9df65b49affb',
    },
    dark: {
      value: UndefinedColor,
      id: 'd6415141-bf7b-43c5-bbf9-65203a7c65b5',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: 'afb7982a-2f96-4ac9-8b4f-11d826751fe6',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'bc3a6bd0-1abd-4455-ae42-ada2203c7203',
    },
    dark: {
      value: UndefinedColor,
      id: '2f13d43b-adef-407a-80c0-477cbdfbc326',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: UndefinedColor,
      id: 'c287863d-421a-45b0-99ff-4b39d93c22ed',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a3f4b496-5851-4841-bb5a-fafe1027937a',
    },
    dark: {
      value: UndefinedColor,
      id: '49bb6646-7088-4d49-b023-f0ab94a287c0',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Background Disabled',
    light: {
      value: UndefinedColor,
      id: '77a2fbd4-932c-442e-a7e0-ad44fdfa52b8',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a3884c9e-f48f-4d5f-b787-db5554512131',
    },
    dark: {
      value: UndefinedColor,
      id: '894659cd-18b4-4935-bfc9-19e290516c80',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Border Disabled',
    light: {
      value: UndefinedColor,
      id: 'd878d291-b4b1-4228-877c-76570ef8a09c',
    },
    highContrast: {
      value: UndefinedColor,
      id: '66935779-6b9b-4dae-a327-0bf1a1c988e0',
    },
    dark: {
      value: UndefinedColor,
      id: '3525b581-74f4-4c1e-af4b-4507d491d528',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: 'b8868a5a-cb19-48a8-b90a-597369f4f5d9',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'bf9fe593-85ac-4cf8-9c7f-4f0e2e61749c',
    },
    dark: {
      value: UndefinedColor,
      id: 'fdc9350e-8629-444f-afbc-cc3543725d75',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Background 1',
    light: {
      value: 'rgba(59,58,57,0.9)',
      id: 'a55a7fdc-c68b-4b27-84ce-e270d3ef923e',
    },
    highContrast: {
      value: '#000',
      id: '98073d28-476c-4a5f-81a3-384e03be9cb6',
    },
    dark: {
      value: 'rgba(59,58,57,0.9)',
      id: 'a2fbe029-fe15-4bc7-8b3c-bc0797c9860a',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Background 2',
    light: {
      value: 'rgba(41,40,40,0.9)',
      id: 'e4a7eec4-41ba-4258-97ce-1b38f0c6f62e',
    },
    highContrast: {
      value: '#fff',
      id: '45f12261-801e-4582-a1f8-84355ed6ceff',
    },
    dark: {
      value: 'rgba(41,40,40,0.9)',
      id: '46be0489-54e9-490f-aea6-12f26a07e430',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Border 1',
    light: {
      value: 'transparent',
      id: 'aa3ad3bb-2ca5-4223-951a-31fe8d775e10',
    },
    highContrast: {
      value: '#fff',
      id: '8c04e345-d02e-440a-a399-57931376946e',
    },
    dark: {
      value: 'transparent',
      id: 'dd9c9549-2e12-4e18-b03c-a5f1b8838a98',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Border 2',
    light: {
      value: 'rgba(37,36,35,0.2)',
      id: '77ed6924-d716-4777-bb91-d78e39eeafd2',
    },
    highContrast: {
      value: '#fff',
      id: '1d1b401e-d55c-4759-8fb0-6cb66178517a',
    },
    dark: {
      value: 'rgba(255,255,255,0.5)',
      id: 'a4867624-348d-4557-a946-f6407938bb7c',
    },
    scheme: Schemes.onyx,
  },
  {
    token: 'Foreground',
    light: {
      value: UndefinedColor,
      id: '722e004c-58ee-4a83-bf45-c1ed27228b84',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a32ba9a2-f461-47d0-9209-d37478736166',
    },
    dark: {
      value: UndefinedColor,
      id: '24884664-2f2d-4bdb-961e-9287e786312f',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Background',
    light: {
      value: 'rgba(70,71,117,0.4)',
      id: '1c708b8e-f88d-4249-a37e-96da375fe10f',
    },
    highContrast: {
      value: 'rgba(255,255,255,0.05)',
      id: '952ebabf-3ca7-4437-944e-cdbc17f56671',
    },
    dark: {
      value: 'rgba(45,44,44,0.4)',
      id: 'e28541a7-4396-4658-9db7-f17c385fd146',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Border',
    light: {
      value: UndefinedColor,
      id: 'f93f2fd9-1777-413f-a866-f3ad336047ed',
    },
    highContrast: {
      value: UndefinedColor,
      id: '564b1b61-28be-4c40-baec-2fa99bd5ade0',
    },
    dark: {
      value: UndefinedColor,
      id: '506d8fea-8243-4f95-a948-c9c982d3ee39',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Shadow',
    light: {
      value: UndefinedColor,
      id: '5bd1dca5-b3eb-4061-911c-25e6165e0d95',
    },
    highContrast: {
      value: UndefinedColor,
      id: '149d3b31-a0a2-4467-b63f-c3a51ee15396',
    },
    dark: {
      value: UndefinedColor,
      id: '0c7441d6-c209-4bb4-97a4-38aa53df9991',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Foreground Hover',
    light: {
      value: UndefinedColor,
      id: '39c13aec-3596-407c-bc49-558e7dcffde5',
    },
    highContrast: {
      value: UndefinedColor,
      id: '842677db-3828-48d3-bfbb-56654298b8e4',
    },
    dark: {
      value: UndefinedColor,
      id: 'b6f6e087-33c6-4298-a212-ce6fca29f732',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Background Hover',
    light: {
      value: 'rgba(98,100,167,0.15)',
      id: 'e50ca8fd-c741-42d3-b3e4-7b9e803fc29d',
    },
    highContrast: {
      value: '#1aebff',
      id: 'd618d03a-8fb1-4267-9585-9f4d08104e1e',
    },
    dark: {
      value: 'rgba(98,100,167,0.15)',
      id: '0b7cb902-dc0f-4e0c-b92b-86c15fbab874',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Border Hover',
    light: {
      value: UndefinedColor,
      id: 'd15bb165-8afa-461e-a27d-3af14a1ceebf',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'f628ffce-2b60-43f4-9a24-83a5e6f90d75',
    },
    dark: {
      value: UndefinedColor,
      id: '3d98e23e-6041-4d82-bab4-faa95edfcee3',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Shadow Hover',
    light: {
      value: UndefinedColor,
      id: '3a751003-5b3b-4a4e-8dcc-0746c0a88f94',
    },
    highContrast: {
      value: UndefinedColor,
      id: '2d773e33-5c1a-41c7-81bf-0632bc8f49f0',
    },
    dark: {
      value: UndefinedColor,
      id: '0eedd1ec-98ec-4c86-b014-8091dea27d17',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Foreground Active',
    light: {
      value: UndefinedColor,
      id: '78344440-3444-4883-9fca-8f64d3eaae69',
    },
    highContrast: {
      value: UndefinedColor,
      id: '10a2d441-7960-468b-8aa1-0e065bb0bf59',
    },
    dark: {
      value: UndefinedColor,
      id: 'bcb59cc3-291b-477a-8ef0-9bd71a03bfb0',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Background Active',
    light: {
      value: 'rgba(98,100,167,0.15)',
      id: 'c6fcfc8d-e281-4328-bd86-d56ade036922',
    },
    highContrast: {
      value: '#1aebff',
      id: 'e97fafe1-ccdb-4c1e-800c-bbf8f58b0e6b',
    },
    dark: {
      value: 'rgba(98,100,167,0.15)',
      id: '1276260a-9420-4dd0-a004-8dc32ebdfa54',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Border Active',
    light: {
      value: UndefinedColor,
      id: '75eaa362-3240-429b-8aca-7386b855b613',
    },
    highContrast: {
      value: UndefinedColor,
      id: '07920029-ece5-4e51-8cdb-677c01a31e28',
    },
    dark: {
      value: UndefinedColor,
      id: '7a87b9cd-31da-4e23-9ee2-80b7dcad635e',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Shadow Active',
    light: {
      value: UndefinedColor,
      id: '3f6d58be-220f-4313-ba6b-e5ad917d060e',
    },
    highContrast: {
      value: UndefinedColor,
      id: '8dc7b045-0eb2-41d7-bfaf-2860d5087aa1',
    },
    dark: {
      value: UndefinedColor,
      id: '19b2f860-5776-4a59-b561-354dd9f68325',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Foreground Focus',
    light: {
      value: UndefinedColor,
      id: 'b14c2803-214b-4a15-a275-29643626e055',
    },
    highContrast: {
      value: UndefinedColor,
      id: '213c8014-7502-4b47-847b-ff5a9f8763a8',
    },
    dark: {
      value: UndefinedColor,
      id: '9af4c9d5-43e7-48a3-81ab-60c5f546eca7',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Background Focus',
    light: {
      value: UndefinedColor,
      id: 'b0769a36-4128-41d3-8d65-9393a046238d',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'c024d9a7-109b-4e23-ad7b-9ad791faa6b7',
    },
    dark: {
      value: UndefinedColor,
      id: '05e6d8e0-81d7-43e2-b587-000c1af173ae',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Border Focus',
    light: {
      value: UndefinedColor,
      id: 'cbae7edc-afe1-441a-9205-03d76785a03a',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'd5567eae-1943-45fd-bb3c-79b8e7c9b924',
    },
    dark: {
      value: UndefinedColor,
      id: 'b5996e9e-7387-4306-9592-d7f7be93ebb4',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Shadow Focus',
    light: {
      value: UndefinedColor,
      id: 'af665eaa-b9f7-405d-a9d6-a245a07125b8',
    },
    highContrast: {
      value: UndefinedColor,
      id: '7cfa3ec6-be98-4e35-b07f-041444598456',
    },
    dark: {
      value: UndefinedColor,
      id: 'cf78adda-2ade-4035-8a36-b2df8330d473',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Foreground Pressed',
    light: {
      value: UndefinedColor,
      id: '5940d465-837a-493c-9048-c0d7c3df5a71',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'ffb2d742-90bb-4a85-8a58-5394afb1dc90',
    },
    dark: {
      value: UndefinedColor,
      id: 'ad1abee2-0e65-4dd2-b5d1-3363c49330ca',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Background Pressed',
    light: {
      value: UndefinedColor,
      id: 'a5a74cf0-bf6a-462a-bce2-10b850f59a10',
    },
    highContrast: {
      value: UndefinedColor,
      id: '5d797f95-d901-49d0-b743-ea49dd9c4bc2',
    },
    dark: {
      value: UndefinedColor,
      id: '60509bc1-e961-41c5-b2df-91b502283df0',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Border Pressed',
    light: {
      value: UndefinedColor,
      id: '40b7c960-94cf-4dee-b913-e27ff6d76ec2',
    },
    highContrast: {
      value: UndefinedColor,
      id: '39b8b2d0-59c4-4ba9-9532-207c4e1a6627',
    },
    dark: {
      value: UndefinedColor,
      id: 'b3404afb-07cc-4da9-a9a3-aaba36c38c7b',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Shadow Pressed',
    light: {
      value: UndefinedColor,
      id: '5ed1d672-7fb5-4e4a-9379-81fdf48cc696',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a42ce65b-5ef0-4e6d-b253-f3fdc27352b3',
    },
    dark: {
      value: UndefinedColor,
      id: 'f074428a-cbb4-4c46-8e05-b7abf67febb6',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Foreground Disabled',
    light: {
      value: UndefinedColor,
      id: 'e46c787a-2848-4c7f-bcc3-8bcf2faf0841',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'a455fa41-fcaa-45a9-8757-6f3d1fcf473e',
    },
    dark: {
      value: UndefinedColor,
      id: '8d59393f-3589-4cb3-8de6-2f6c526b87ee',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Background Disabled',
    light: {
      value: UndefinedColor,
      id: '8a0a5ba3-7efc-4874-a44b-a84539efe070',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'cb04a967-9f2b-4781-b366-5602e71ea045',
    },
    dark: {
      value: UndefinedColor,
      id: 'bdd4ddee-b45e-4c1b-b553-da1016081a00',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Border Disabled',
    light: {
      value: UndefinedColor,
      id: 'e65a82fe-baea-462b-b0db-eb16db4fb586',
    },
    highContrast: {
      value: UndefinedColor,
      id: 'e6f4ea13-5619-4c62-b2ee-3f7acdce0007',
    },
    dark: {
      value: UndefinedColor,
      id: 'ba9b8a4c-c05b-4eff-a5ec-7bc3b5f87fdf',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Shadow Disabled',
    light: {
      value: UndefinedColor,
      id: 'e251f00d-5b8d-41c6-8588-30b8eb0c2276',
    },
    highContrast: {
      value: UndefinedColor,
      id: '1e4bc05c-a461-4d2a-977e-12b904cb3681',
    },
    dark: {
      value: UndefinedColor,
      id: '3413bcc4-393a-4c05-b77a-99af56b366f3',
    },
    scheme: Schemes.amethyst,
  },
  {
    token: 'Background Hover 1',
    light: {
      value: 'rgba(51,52,74,0.5)',
      id: '205e19a4-df97-4b03-97bb-45d3775e176f',
    },
    highContrast: {
      value: '#1aebff',
      id: '5e4330c6-fe3f-4ab0-a0ee-dd99e5598324',
    },
    dark: {
      value: '#252423',
      id: '09d8ee48-3776-4815-b6d8-3d7b336284c5',
    },
    scheme: Schemes.amethyst,
  },
]

let colorsMapByIdRaw = new Map<string, string>()

let colorsSeparatedBySchemeRaw: Record<Schemes, ColorEntry[]> = {
  default: [],
  brand: [],
  red: [],
  green: [],
  yellow: [],
  orange: [],
  pink: [],
  silver: [],
  onyx: [],
  amethyst: [],
}

for (const color of colors) {
  colorsMapByIdRaw.set(color.light.id, color.light.value)
  colorsMapByIdRaw.set(color.dark.id, color.dark.value)
  colorsMapByIdRaw.set(color.highContrast.id, color.highContrast.value)
  colorsSeparatedBySchemeRaw[color.scheme].push(color)
}

export const colorsSeparatedByScheme = colorsSeparatedBySchemeRaw
export const colorsMapById = colorsMapByIdRaw

export const colorSchemeNames: Record<Schemes, string> = {
  default: 'default',
  brand: 'brand',
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  orange: 'orange',
  pink: 'pink',
  silver: 'silver',
  onyx: 'onyx',
  amethyst: 'amethyst',
}
