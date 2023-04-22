import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AccessPeriodKeySpecifier = ('unit' | 'value' | AccessPeriodKeySpecifier)[];
export type AccessPeriodFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccessTokenKeySpecifier = ('accessUntil' | 'code' | 'id' | AccessTokenKeySpecifier)[];
export type AccessTokenFieldPolicy = {
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateAccessCodePayloadKeySpecifier = ('accessToken' | 'errors' | ActivateAccessCodePayloadKeySpecifier)[];
export type ActivateAccessCodePayloadFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateBundlePayloadKeySpecifier = ('errors' | 'success' | ActivateBundlePayloadKeySpecifier)[];
export type ActivateBundlePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateChallengePayloadKeySpecifier = ('challengeParticipation' | 'challengePass' | 'errors' | ActivateChallengePayloadKeySpecifier)[];
export type ActivateChallengePayloadFieldPolicy = {
	challengeParticipation?: FieldPolicy<any> | FieldReadFunction<any>,
	challengePass?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateFullAccessCodePayloadKeySpecifier = ('errors' | 'success' | 'user' | ActivateFullAccessCodePayloadKeySpecifier)[];
export type ActivateFullAccessCodePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateGenericProgramPayloadKeySpecifier = ('errors' | 'success' | ActivateGenericProgramPayloadKeySpecifier)[];
export type ActivateGenericProgramPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateLegacyPausaSmartPayloadKeySpecifier = ('accessDays' | 'accessUntil' | 'action' | 'errors' | ActivateLegacyPausaSmartPayloadKeySpecifier)[];
export type ActivateLegacyPausaSmartPayloadFieldPolicy = {
	accessDays?: FieldPolicy<any> | FieldReadFunction<any>,
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateLiveEventPayloadKeySpecifier = ('errors' | 'liveEventAccess' | 'success' | ActivateLiveEventPayloadKeySpecifier)[];
export type ActivateLiveEventPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEventAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateOneTimeCodePayloadKeySpecifier = ('errors' | 'success' | 'user' | ActivateOneTimeCodePayloadKeySpecifier)[];
export type ActivateOneTimeCodePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivatePausaSmartPayloadKeySpecifier = ('success' | ActivatePausaSmartPayloadKeySpecifier)[];
export type ActivatePausaSmartPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivatePayloadKeySpecifier = ('accessToken' | 'errors' | 'genericProgram' | ActivatePayloadKeySpecifier)[];
export type ActivatePayloadFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	genericProgram?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateTrialExtensionPayloadKeySpecifier = ('errors' | 'success' | 'user' | ActivateTrialExtensionPayloadKeySpecifier)[];
export type ActivateTrialExtensionPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddAdyenPaymentMethodPayloadKeySpecifier = ('errors' | 'orderId' | 'resultAction' | 'resultCode' | 'transaction' | AddAdyenPaymentMethodPayloadKeySpecifier)[];
export type AddAdyenPaymentMethodPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	resultAction?: FieldPolicy<any> | FieldReadFunction<any>,
	resultCode?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddCommentPayloadKeySpecifier = ('comment' | AddCommentPayloadKeySpecifier)[];
export type AddCommentPayloadFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddFavoritePlaylistPayloadKeySpecifier = ('playlist' | AddFavoritePlaylistPayloadKeySpecifier)[];
export type AddFavoritePlaylistPayloadFieldPolicy = {
	playlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddFavoriteVideoPayloadKeySpecifier = ('video' | AddFavoriteVideoPayloadKeySpecifier)[];
export type AddFavoriteVideoPayloadFieldPolicy = {
	video?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddMoodTrackerAnswerPayloadKeySpecifier = ('errors' | 'status' | AddMoodTrackerAnswerPayloadKeySpecifier)[];
export type AddMoodTrackerAnswerPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddPaymentKeySpecifier = ('amountCents' | 'amountCurrency' | 'orderId' | 'originalAmountCents' | 'paymentProvider' | 'state' | 'success' | AddPaymentKeySpecifier)[];
export type AddPaymentFieldPolicy = {
	amountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	amountCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAmountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddPlaylistPayloadKeySpecifier = ('playlist' | AddPlaylistPayloadKeySpecifier)[];
export type AddPlaylistPayloadFieldPolicy = {
	playlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddSearchResultPayloadKeySpecifier = ('documentId' | AddSearchResultPayloadKeySpecifier)[];
export type AddSearchResultPayloadFieldPolicy = {
	documentId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddStoryPayloadKeySpecifier = ('story' | AddStoryPayloadKeySpecifier)[];
export type AddStoryPayloadFieldPolicy = {
	story?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddTrustlyPaymentMethodPayloadKeySpecifier = ('errors' | 'orderId' | 'resultUrl' | 'transaction' | AddTrustlyPaymentMethodPayloadKeySpecifier)[];
export type AddTrustlyPaymentMethodPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	resultUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddUserFeedbackPayloadKeySpecifier = ('success' | AddUserFeedbackPayloadKeySpecifier)[];
export type AddUserFeedbackPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddUserSchedulePayloadKeySpecifier = ('filename' | 'result' | AddUserSchedulePayloadKeySpecifier)[];
export type AddUserSchedulePayloadFieldPolicy = {
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddVideoToPlaylistPayloadKeySpecifier = ('playlist' | AddVideoToPlaylistPayloadKeySpecifier)[];
export type AddVideoToPlaylistPayloadFieldPolicy = {
	playlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddWaitingItemPayloadKeySpecifier = ('errors' | 'success' | AddWaitingItemPayloadKeySpecifier)[];
export type AddWaitingItemPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdyenActionKeySpecifier = ('actionType' | 'httpMethod' | 'paymentData' | 'paymentMethodType' | 'redirectData' | 'token' | 'url' | AdyenActionKeySpecifier)[];
export type AdyenActionFieldPolicy = {
	actionType?: FieldPolicy<any> | FieldReadFunction<any>,
	httpMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentData?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentMethodType?: FieldPolicy<any> | FieldReadFunction<any>,
	redirectData?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AnswerSurveyPayloadKeySpecifier = ('errors' | AnswerSurveyPayloadKeySpecifier)[];
export type AnswerSurveyPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppleSubscriptionPrecheckKeySpecifier = ('existingUser' | 'exists' | AppleSubscriptionPrecheckKeySpecifier)[];
export type AppleSubscriptionPrecheckFieldPolicy = {
	existingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	exists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetsKeySpecifier = ('avatar' | 'headerImage' | AssetsKeySpecifier)[];
export type AssetsFieldPolicy = {
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	headerImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignMobileDevicePayloadKeySpecifier = ('errors' | 'user' | AssignMobileDevicePayloadKeySpecifier)[];
export type AssignMobileDevicePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignPlanToTrialPayloadKeySpecifier = ('success' | AssignPlanToTrialPayloadKeySpecifier)[];
export type AssignPlanToTrialPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticateUserPayloadKeySpecifier = ('token' | 'user' | AuthenticateUserPayloadKeySpecifier)[];
export type AuthenticateUserPayloadFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutocompleteKeySpecifier = ('error' | 'query' | 'results' | AutocompleteKeySpecifier)[];
export type AutocompleteFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AvailableSubscriptionPlanKeySpecifier = ('code' | 'codeType' | 'fullAccesses' | 'isCodeValid' | 'oneTimeCodes' | 'subscriptions' | 'trialReferralCodes' | 'trials' | 'validationMessage' | AvailableSubscriptionPlanKeySpecifier)[];
export type AvailableSubscriptionPlanFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	codeType?: FieldPolicy<any> | FieldReadFunction<any>,
	fullAccesses?: FieldPolicy<any> | FieldReadFunction<any>,
	isCodeValid?: FieldPolicy<any> | FieldReadFunction<any>,
	oneTimeCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	trialReferralCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	trials?: FieldPolicy<any> | FieldReadFunction<any>,
	validationMessage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlogPostKeySpecifier = ('authors' | 'body' | 'categories' | 'featuredImage' | 'id' | 'language' | 'market' | 'publishedAt' | 'slug' | 'tags' | 'title' | BlogPostKeySpecifier)[];
export type BlogPostFieldPolicy = {
	authors?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleKeySpecifier = ('accessPeriodUnit' | 'accessPeriodValue' | 'accessStrategy' | 'active' | 'bundleCategory' | 'bundleItems' | 'client' | 'heroImage' | 'heroMobileImage' | 'hiddenInListing' | 'id' | 'infoPanel' | 'infoPanel2' | 'isUserEligible' | 'kind' | 'metaDescription' | 'metaImage' | 'promotionalImage' | 'publishedAt' | 'sections' | 'shortDescription' | 'slug' | 'tags' | 'title' | 'trailer' | 'userAccess' | 'waitingItemInfo' | BundleKeySpecifier)[];
export type BundleFieldPolicy = {
	accessPeriodUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	accessPeriodValue?: FieldPolicy<any> | FieldReadFunction<any>,
	accessStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	bundleCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	bundleItems?: FieldPolicy<any> | FieldReadFunction<any>,
	client?: FieldPolicy<any> | FieldReadFunction<any>,
	heroImage?: FieldPolicy<any> | FieldReadFunction<any>,
	heroMobileImage?: FieldPolicy<any> | FieldReadFunction<any>,
	hiddenInListing?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	infoPanel?: FieldPolicy<any> | FieldReadFunction<any>,
	infoPanel2?: FieldPolicy<any> | FieldReadFunction<any>,
	isUserEligible?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	metaImage?: FieldPolicy<any> | FieldReadFunction<any>,
	promotionalImage?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	sections?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	trailer?: FieldPolicy<any> | FieldReadFunction<any>,
	userAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	waitingItemInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleInfoPanelKeySpecifier = ('description' | 'image' | 'title' | BundleInfoPanelKeySpecifier)[];
export type BundleInfoPanelFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleInfoPanel2KeySpecifier = ('image' | 'longText' | 'previewText' | 'title' | BundleInfoPanel2KeySpecifier)[];
export type BundleInfoPanel2FieldPolicy = {
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longText?: FieldPolicy<any> | FieldReadFunction<any>,
	previewText?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleItemKeySpecifier = ('blogPosts' | 'challenges' | 'documents' | 'liveEvents' | 'playlists' | 'programs' | 'videos' | BundleItemKeySpecifier)[];
export type BundleItemFieldPolicy = {
	blogPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	challenges?: FieldPolicy<any> | FieldReadFunction<any>,
	documents?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	programs?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BundleSectionKeySpecifier = ('items' | 'viewAllUrl' | BundleSectionKeySpecifier)[];
export type BundleSectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	viewAllUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CampaignCodeKeySpecifier = ('code' | 'days' | 'id' | CampaignCodeKeySpecifier)[];
export type CampaignCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	days?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CampaignSectionKeySpecifier = ('active' | 'buttonLink' | 'buttonText' | 'description' | 'imageUrl' | 'markets' | 'tag' | 'title' | CampaignSectionKeySpecifier)[];
export type CampaignSectionFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	buttonLink?: FieldPolicy<any> | FieldReadFunction<any>,
	buttonText?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	markets?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CancelSubscriptionPayloadKeySpecifier = ('success' | CancelSubscriptionPayloadKeySpecifier)[];
export type CancelSubscriptionPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChallengeKeySpecifier = ('name' | ChallengeKeySpecifier)[];
export type ChallengeFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChallengeParticipantKeySpecifier = ('accessUntil' | 'challenge' | ChallengeParticipantKeySpecifier)[];
export type ChallengeParticipantFieldPolicy = {
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	challenge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChallengePassKeySpecifier = ('challenge' | 'code' | 'days' | ChallengePassKeySpecifier)[];
export type ChallengePassFieldPolicy = {
	challenge?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	days?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangeEmailPreferencePayloadKeySpecifier = ('errors' | 'success' | ChangeEmailPreferencePayloadKeySpecifier)[];
export type ChangeEmailPreferencePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangePasswordPayloadKeySpecifier = ('user' | ChangePasswordPayloadKeySpecifier)[];
export type ChangePasswordPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangePreferencesPayloadKeySpecifier = ('user' | ChangePreferencesPayloadKeySpecifier)[];
export type ChangePreferencesPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangeProductEmailPreferencePayloadKeySpecifier = ('errors' | 'success' | ChangeProductEmailPreferencePayloadKeySpecifier)[];
export type ChangeProductEmailPreferencePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangeProfileDataPayloadKeySpecifier = ('user' | ChangeProfileDataPayloadKeySpecifier)[];
export type ChangeProfileDataPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangeProfileInfoPayloadKeySpecifier = ('user' | ChangeProfileInfoPayloadKeySpecifier)[];
export type ChangeProfileInfoPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangeProfilePrivacyPayloadKeySpecifier = ('user' | ChangeProfilePrivacyPayloadKeySpecifier)[];
export type ChangeProfilePrivacyPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClaimTrialPayloadKeySpecifier = ('errors' | 'success' | ClaimTrialPayloadKeySpecifier)[];
export type ClaimTrialPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientKeySpecifier = ('active' | 'bundles' | 'id' | 'info' | 'logo' | 'name' | 'slug' | ClientKeySpecifier)[];
export type ClientFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	bundles?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeDetailsKeySpecifier = ('provider' | 'type' | CodeDetailsKeySpecifier)[];
export type CodeDetailsFieldPolicy = {
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('description' | 'id' | 'resourceClass' | 'resourceId' | 'userId' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceClass?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompleteProfilePayloadKeySpecifier = ('errors' | 'user' | CompleteProfilePayloadKeySpecifier)[];
export type CompleteProfilePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfirmEmailPayloadKeySpecifier = ('errors' | 'user' | ConfirmEmailPayloadKeySpecifier)[];
export type ConfirmEmailPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentKeySpecifier = ('externalLede' | 'externalTitle' | 'internalLede' | 'internalTitle' | 'lede' | ContentKeySpecifier)[];
export type ContentFieldPolicy = {
	externalLede?: FieldPolicy<any> | FieldReadFunction<any>,
	externalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	internalLede?: FieldPolicy<any> | FieldReadFunction<any>,
	internalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	lede?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentAnswerKeySpecifier = ('key' | 'value' | ContentAnswerKeySpecifier)[];
export type ContentAnswerFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseKeySpecifier = ('content' | 'externalImageUrl' | 'id' | 'legacy' | 'name' | 'path' | 'slug' | 'themes' | 'titleImageUrl' | CourseKeySpecifier)[];
export type CourseFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	externalImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	legacy?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	themes?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImageUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseAccessKeySpecifier = ('accessStatus' | 'accessUntil' | 'course' | 'courseProgress' | CourseAccessKeySpecifier)[];
export type CourseAccessFieldPolicy = {
	accessStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	course?: FieldPolicy<any> | FieldReadFunction<any>,
	courseProgress?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoursesSectionKeySpecifier = ('description' | 'group1ButtonLink' | 'group1ButtonText' | 'group1Description' | 'group1ImageUrl' | 'group1Title' | 'group2ButtonLink' | 'group2ButtonText' | 'group2Description' | 'group2ImageUrl' | 'group2Title' | 'title' | CoursesSectionKeySpecifier)[];
export type CoursesSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	group1ButtonLink?: FieldPolicy<any> | FieldReadFunction<any>,
	group1ButtonText?: FieldPolicy<any> | FieldReadFunction<any>,
	group1Description?: FieldPolicy<any> | FieldReadFunction<any>,
	group1ImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	group1Title?: FieldPolicy<any> | FieldReadFunction<any>,
	group2ButtonLink?: FieldPolicy<any> | FieldReadFunction<any>,
	group2ButtonText?: FieldPolicy<any> | FieldReadFunction<any>,
	group2Description?: FieldPolicy<any> | FieldReadFunction<any>,
	group2ImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	group2Title?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateNewPasswordPayloadKeySpecifier = ('success' | CreateNewPasswordPayloadKeySpecifier)[];
export type CreateNewPasswordPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CtaSectionKeySpecifier = ('description' | 'imageUrl' | 'title' | CtaSectionKeySpecifier)[];
export type CtaSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrentUserKeySpecifier = ('accessToken' | 'accessUntil' | 'accountActivatedAt' | 'address' | 'assets' | 'availableForTrial' | 'challengeParticipations' | 'city' | 'completedAt' | 'country' | 'courseAccesses' | 'dateOfBirth' | 'eligibleForDelete' | 'eligibleForStartDiscount' | 'eligibleForTrial' | 'email' | 'emailLanguage' | 'extraPayments' | 'favorites' | 'firstName' | 'gender' | 'group' | 'hasWebPayments' | 'id' | 'interests' | 'isEmailActivated' | 'isPublic' | 'kind' | 'lastName' | 'liveEventsAccess' | 'locale' | 'nextBillingCycle' | 'onboardingCompleted' | 'onboardingInterestsSkipped' | 'onboardingSkipped' | 'onboardingTopicsSkipped' | 'paymentFailedAt' | 'paymentType' | 'paymentTypeRenews' | 'phone' | 'playlists' | 'preferences' | 'previousEmail' | 'privacySettings' | 'profession' | 'profile' | 'programAccess' | 'programs' | 'provider' | 'receipts' | 'referralCode' | 'registrationDetail' | 'signUpPlatform' | 'slug' | 'statistics' | 'stories' | 'subscription' | 'topics' | 'trialPeriod' | 'url' | 'videoNotes' | 'zipcode' | CurrentUserKeySpecifier)[];
export type CurrentUserFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	accountActivatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeParticipations?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	courseAccesses?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForStartDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPayments?: FieldPolicy<any> | FieldReadFunction<any>,
	favorites?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	hasWebPayments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interests?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailActivated?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEventsAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	nextBillingCycle?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingInterestsSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingTopicsSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentFailedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentType?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentTypeRenews?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	preferences?: FieldPolicy<any> | FieldReadFunction<any>,
	previousEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	privacySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	profession?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	programAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	programs?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	receipts?: FieldPolicy<any> | FieldReadFunction<any>,
	referralCode?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	signUpPlatform?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	statistics?: FieldPolicy<any> | FieldReadFunction<any>,
	stories?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	trialPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	videoNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	zipcode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteAccountPayloadKeySpecifier = ('errors' | 'user' | DeleteAccountPayloadKeySpecifier)[];
export type DeleteAccountPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteAvatarPayloadKeySpecifier = ('user' | DeleteAvatarPayloadKeySpecifier)[];
export type DeleteAvatarPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteFavoritePlaylistPayloadKeySpecifier = ('playlist' | DeleteFavoritePlaylistPayloadKeySpecifier)[];
export type DeleteFavoritePlaylistPayloadFieldPolicy = {
	playlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteFavoriteVideoPayloadKeySpecifier = ('video' | DeleteFavoriteVideoPayloadKeySpecifier)[];
export type DeleteFavoriteVideoPayloadFieldPolicy = {
	video?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePaymentMethodPayloadKeySpecifier = ('errors' | 'success' | DeletePaymentMethodPayloadKeySpecifier)[];
export type DeletePaymentMethodPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePlaylistPayloadKeySpecifier = ('status' | DeletePlaylistPayloadKeySpecifier)[];
export type DeletePlaylistPayloadFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountKeySpecifier = ('discountType' | 'discountValue' | 'discountedPrice' | 'endDate' | 'identifier' | 'startDate' | DiscountKeySpecifier)[];
export type DiscountFieldPolicy = {
	discountType?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	discountedPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentKeySpecifier = ('contentType' | 'id' | 'name' | 'url' | DocumentKeySpecifier)[];
export type DocumentFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DurationKeySpecifier = ('unit' | 'value' | DurationKeySpecifier)[];
export type DurationFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DurationDisplayKeySpecifier = ('unit' | 'value' | DurationDisplayKeySpecifier)[];
export type DurationDisplayFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailKeySpecifier = ('email' | 'errors' | 'exists' | EmailKeySpecifier)[];
export type EmailFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	exists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailPreferenceKeySpecifier = ('description' | 'id' | 'isMuted' | 'key' | 'mutable' | 'name' | EmailPreferenceKeySpecifier)[];
export type EmailPreferenceFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isMuted?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	mutable?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('message' | 'path' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventProxyPayloadKeySpecifier = ('errors' | EventProxyPayloadKeySpecifier)[];
export type EventProxyPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExtraPaymentKeySpecifier = ('amount' | 'currency' | 'date' | 'downloadUrl' | 'number' | 'paymentType' | 'transact' | ExtraPaymentKeySpecifier)[];
export type ExtraPaymentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentType?: FieldPolicy<any> | FieldReadFunction<any>,
	transact?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FavoritePayloadKeySpecifier = ('errors' | FavoritePayloadKeySpecifier)[];
export type FavoritePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FavoritesKeySpecifier = ('blogPosts' | 'playlists' | 'videos' | FavoritesKeySpecifier)[];
export type FavoritesFieldPolicy = {
	blogPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeaturesSectionKeySpecifier = ('description' | 'featureBullets' | 'imageUrl' | 'title' | FeaturesSectionKeySpecifier)[];
export type FeaturesSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	featureBullets?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlipperFlagKeySpecifier = ('name' | 'value' | FlipperFlagKeySpecifier)[];
export type FlipperFlagFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FormFieldsKeySpecifier = ('accepturl' | 'amount' | 'billingAddress' | 'billingFirstName' | 'callbackurl' | 'currency' | 'decorator' | 'email' | 'lang' | 'md5key' | 'merchant' | 'orderid' | 'ordline0_0' | 'ordline0_1' | 'ordline1_0' | 'ordline1_1' | 'ordline2_0' | 'ordline2_1' | 'preauth' | 'test' | FormFieldsKeySpecifier)[];
export type FormFieldsFieldPolicy = {
	accepturl?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	billingFirstName?: FieldPolicy<any> | FieldReadFunction<any>,
	callbackurl?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	decorator?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	lang?: FieldPolicy<any> | FieldReadFunction<any>,
	md5key?: FieldPolicy<any> | FieldReadFunction<any>,
	merchant?: FieldPolicy<any> | FieldReadFunction<any>,
	orderid?: FieldPolicy<any> | FieldReadFunction<any>,
	ordline0_0?: FieldPolicy<any> | FieldReadFunction<any>,
	ordline0_1?: FieldPolicy<any> | FieldReadFunction<any>,
	ordline1_0?: FieldPolicy<any> | FieldReadFunction<any>,
	ordline1_1?: FieldPolicy<any> | FieldReadFunction<any>,
	ordline2_0?: FieldPolicy<any> | FieldReadFunction<any>,
	ordline2_1?: FieldPolicy<any> | FieldReadFunction<any>,
	preauth?: FieldPolicy<any> | FieldReadFunction<any>,
	test?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericProgramKeySpecifier = ('accessPeriod' | 'accessStatus' | 'category' | 'description' | 'discount' | 'duration' | 'durationDisplay' | 'id' | 'instructors' | 'kind' | 'language' | 'markets' | 'meta' | 'postSurvey' | 'preSurvey' | 'price' | 'priceType' | 'programAccess' | 'progress' | 'promotionalImageUrl' | 'published' | 'publishedAt' | 'recomendation' | 'shortDescription' | 'slug' | 'summaryAsset' | 'tags' | 'themes' | 'title' | 'titleImageUrl' | 'trailer' | GenericProgramKeySpecifier)[];
export type GenericProgramFieldPolicy = {
	accessPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	accessStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	durationDisplay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	instructors?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	markets?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	postSurvey?: FieldPolicy<any> | FieldReadFunction<any>,
	preSurvey?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	priceType?: FieldPolicy<any> | FieldReadFunction<any>,
	programAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	promotionalImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	recomendation?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	summaryAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	themes?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	trailer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericProgramPaymentKeySpecifier = ('amountCents' | 'amountCurrency' | 'orderId' | 'originalAmountCents' | 'paymentProvider' | 'program' | 'state' | 'success' | 'voucher' | GenericProgramPaymentKeySpecifier)[];
export type GenericProgramPaymentFieldPolicy = {
	amountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	amountCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAmountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	program?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericProgramWithCodeKeySpecifier = ('code' | 'codeStatus' | 'price' | GenericProgramWithCodeKeySpecifier)[];
export type GenericProgramWithCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	codeStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenresSectionKeySpecifier = ('description' | 'genre' | 'title' | GenresSectionKeySpecifier)[];
export type GenresSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	genre?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HeroSectionKeySpecifier = ('description' | 'imageUrl' | 'mobileImageUrl' | 'smallNote' | 'title' | HeroSectionKeySpecifier)[];
export type HeroSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	mobileImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	smallNote?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InstructorKeySpecifier = ('assets' | 'blogDescription' | 'dateOfBirth' | 'description' | 'education' | 'id' | 'languages' | 'location' | 'name' | 'philosophy' | 'quote' | 'shortDescription' | 'slug' | 'speciality' | 'subtitle' | 'team' | 'titleImageUrl' | 'videos' | 'videosCount' | 'webpage' | 'youtubeId' | InstructorKeySpecifier)[];
export type InstructorFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	blogDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	education?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	philosophy?: FieldPolicy<any> | FieldReadFunction<any>,
	quote?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	speciality?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>,
	videosCount?: FieldPolicy<any> | FieldReadFunction<any>,
	webpage?: FieldPolicy<any> | FieldReadFunction<any>,
	youtubeId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InstructorAssetsKeySpecifier = ('externalImage' | 'squareImage' | 'titleImage' | InstructorAssetsKeySpecifier)[];
export type InstructorAssetsFieldPolicy = {
	externalImage?: FieldPolicy<any> | FieldReadFunction<any>,
	squareImage?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InstructorInGenreKeySpecifier = ('instructor' | 'videosCountInGenres' | InstructorInGenreKeySpecifier)[];
export type InstructorInGenreFieldPolicy = {
	instructor?: FieldPolicy<any> | FieldReadFunction<any>,
	videosCountInGenres?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InterestKeySpecifier = ('hasContent' | 'id' | 'name' | 'slug' | InterestKeySpecifier)[];
export type InterestFieldPolicy = {
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkToRecordingKeySpecifier = ('eventDate' | 'id' | 'link' | LinkToRecordingKeySpecifier)[];
export type LinkToRecordingFieldPolicy = {
	eventDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiveEventKeySpecifier = ('accessories' | 'availableSpots' | 'bookingAvailable' | 'descriptionLong' | 'duration' | 'eventDates' | 'id' | 'kind' | 'language' | 'level' | 'linkToRecordings' | 'maximumParticipants' | 'otherInstructors' | 'price' | 'primaryInstructor' | 'publishedAt' | 'registrationEndDate' | 'registrationStartDate' | 'slug' | 'status' | 'theme' | 'thumbnail' | 'title' | LiveEventKeySpecifier)[];
export type LiveEventFieldPolicy = {
	accessories?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSpots?: FieldPolicy<any> | FieldReadFunction<any>,
	bookingAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionLong?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	eventDates?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	linkToRecordings?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumParticipants?: FieldPolicy<any> | FieldReadFunction<any>,
	otherInstructors?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryInstructor?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationEndDate?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationStartDate?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	theme?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiveEventAccessKeySpecifier = ('liveEvent' | 'zoomLink' | 'zoomPassword' | LiveEventAccessKeySpecifier)[];
export type LiveEventAccessFieldPolicy = {
	liveEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	zoomLink?: FieldPolicy<any> | FieldReadFunction<any>,
	zoomPassword?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiveEventCodesKeySpecifier = ('trial' | 'wellness' | LiveEventCodesKeySpecifier)[];
export type LiveEventCodesFieldPolicy = {
	trial?: FieldPolicy<any> | FieldReadFunction<any>,
	wellness?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiveEventPaymentKeySpecifier = ('amountCents' | 'amountCurrency' | 'live' | 'orderId' | 'originalAmountCents' | 'paymentProvider' | 'state' | 'success' | LiveEventPaymentKeySpecifier)[];
export type LiveEventPaymentFieldPolicy = {
	amountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	amountCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	live?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAmountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginPayloadKeySpecifier = ('user' | LoginPayloadKeySpecifier)[];
export type LoginPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogoutPayloadKeySpecifier = ('status' | LogoutPayloadKeySpecifier)[];
export type LogoutPayloadFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetaKeySpecifier = ('minutes' | 'videoCount' | MetaKeySpecifier)[];
export type MetaFieldPolicy = {
	minutes?: FieldPolicy<any> | FieldReadFunction<any>,
	videoCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetaSectionKeySpecifier = ('description' | 'imageUrl' | 'title' | MetaSectionKeySpecifier)[];
export type MetaSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MobileAppSectionKeySpecifier = ('description' | 'imageUrl' | 'title' | MobileAppSectionKeySpecifier)[];
export type MobileAppSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoodTrackerKeySpecifier = ('finished' | 'id' | 'kind' | MoodTrackerKeySpecifier)[];
export type MoodTrackerFieldPolicy = {
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('accessTokensActivate' | 'accessTokensValidate' | 'activateAccessCode' | 'activateBundle' | 'activateChallenge' | 'activateFullAccessCode' | 'activateGenericProgram' | 'activateLegacyPausaSmart' | 'activateLiveEvent' | 'activateOneTimeCode' | 'activatePausaSmart' | 'activateTrialExtension' | 'addAdyenPaymentMethod' | 'addComment' | 'addFavoritePlaylist' | 'addFavoriteVideo' | 'addMoodTrackerAnswer' | 'addPlaylist' | 'addSearchResult' | 'addStory' | 'addTrustlyPaymentMethod' | 'addUserFeedback' | 'addUserSchedule' | 'addVideoToPlaylist' | 'addWaitingItem' | 'answerSurvey' | 'assignMobileDevice' | 'assignPlanToTrial' | 'authenticateUser' | 'cancelSubscription' | 'changeEmailPreference' | 'changePassword' | 'changePreferences' | 'changeProductEmailPreference' | 'changeProfileData' | 'changeProfileInfo' | 'changeProfilePrivacy' | 'claimTrial' | 'completeProfile' | 'confirmEmail' | 'createNewPassword' | 'deleteAccount' | 'deleteAvatar' | 'deleteFavoritePlaylist' | 'deleteFavoriteVideo' | 'deletePaymentMethod' | 'deletePlaylist' | 'eventProxy' | 'login' | 'logout' | 'participateInAnEvent' | 'patchPlaylist' | 'patchStory' | 'patchUser' | 'payForItem' | 'payForVoucher' | 'paymentsStoreAdyenDropin' | 'paymentsStorePaymentDetails' | 'paymentsStoreTrustly' | 'removeVideoFromPlaylist' | 'resendConfirmationEmail' | 'resetEmailConfirmation' | 'resetPassword' | 'resetSummerCampaign' | 'restoreMobileSubscription' | 'saveOnboardingChoices' | 'savePhasedProgramProgress' | 'saveProgramProgress' | 'signUp' | 'signUpV2' | 'socialSignIn' | 'socialSignUp' | 'storeTransactionId' | 'storeUserDecision' | 'submitInterestForm' | 'updatePaymentMethodSettings' | 'validateChallengeToken' | 'validateProgramCode' | 'videoFavorite' | 'videoWatch' | 'videoWatchCompleted' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	accessTokensActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	accessTokensValidate?: FieldPolicy<any> | FieldReadFunction<any>,
	activateAccessCode?: FieldPolicy<any> | FieldReadFunction<any>,
	activateBundle?: FieldPolicy<any> | FieldReadFunction<any>,
	activateChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	activateFullAccessCode?: FieldPolicy<any> | FieldReadFunction<any>,
	activateGenericProgram?: FieldPolicy<any> | FieldReadFunction<any>,
	activateLegacyPausaSmart?: FieldPolicy<any> | FieldReadFunction<any>,
	activateLiveEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	activateOneTimeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	activatePausaSmart?: FieldPolicy<any> | FieldReadFunction<any>,
	activateTrialExtension?: FieldPolicy<any> | FieldReadFunction<any>,
	addAdyenPaymentMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	addComment?: FieldPolicy<any> | FieldReadFunction<any>,
	addFavoritePlaylist?: FieldPolicy<any> | FieldReadFunction<any>,
	addFavoriteVideo?: FieldPolicy<any> | FieldReadFunction<any>,
	addMoodTrackerAnswer?: FieldPolicy<any> | FieldReadFunction<any>,
	addPlaylist?: FieldPolicy<any> | FieldReadFunction<any>,
	addSearchResult?: FieldPolicy<any> | FieldReadFunction<any>,
	addStory?: FieldPolicy<any> | FieldReadFunction<any>,
	addTrustlyPaymentMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	addUserFeedback?: FieldPolicy<any> | FieldReadFunction<any>,
	addUserSchedule?: FieldPolicy<any> | FieldReadFunction<any>,
	addVideoToPlaylist?: FieldPolicy<any> | FieldReadFunction<any>,
	addWaitingItem?: FieldPolicy<any> | FieldReadFunction<any>,
	answerSurvey?: FieldPolicy<any> | FieldReadFunction<any>,
	assignMobileDevice?: FieldPolicy<any> | FieldReadFunction<any>,
	assignPlanToTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	changeEmailPreference?: FieldPolicy<any> | FieldReadFunction<any>,
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	changePreferences?: FieldPolicy<any> | FieldReadFunction<any>,
	changeProductEmailPreference?: FieldPolicy<any> | FieldReadFunction<any>,
	changeProfileData?: FieldPolicy<any> | FieldReadFunction<any>,
	changeProfileInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	changeProfilePrivacy?: FieldPolicy<any> | FieldReadFunction<any>,
	claimTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	completeProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	createNewPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAvatar?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFavoritePlaylist?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFavoriteVideo?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePaymentMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePlaylist?: FieldPolicy<any> | FieldReadFunction<any>,
	eventProxy?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	participateInAnEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	patchPlaylist?: FieldPolicy<any> | FieldReadFunction<any>,
	patchStory?: FieldPolicy<any> | FieldReadFunction<any>,
	patchUser?: FieldPolicy<any> | FieldReadFunction<any>,
	payForItem?: FieldPolicy<any> | FieldReadFunction<any>,
	payForVoucher?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentsStoreAdyenDropin?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentsStorePaymentDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentsStoreTrustly?: FieldPolicy<any> | FieldReadFunction<any>,
	removeVideoFromPlaylist?: FieldPolicy<any> | FieldReadFunction<any>,
	resendConfirmationEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	resetEmailConfirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	resetSummerCampaign?: FieldPolicy<any> | FieldReadFunction<any>,
	restoreMobileSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	saveOnboardingChoices?: FieldPolicy<any> | FieldReadFunction<any>,
	savePhasedProgramProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	saveProgramProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	signUp?: FieldPolicy<any> | FieldReadFunction<any>,
	signUpV2?: FieldPolicy<any> | FieldReadFunction<any>,
	socialSignIn?: FieldPolicy<any> | FieldReadFunction<any>,
	socialSignUp?: FieldPolicy<any> | FieldReadFunction<any>,
	storeTransactionId?: FieldPolicy<any> | FieldReadFunction<any>,
	storeUserDecision?: FieldPolicy<any> | FieldReadFunction<any>,
	submitInterestForm?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePaymentMethodSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	validateChallengeToken?: FieldPolicy<any> | FieldReadFunction<any>,
	validateProgramCode?: FieldPolicy<any> | FieldReadFunction<any>,
	videoFavorite?: FieldPolicy<any> | FieldReadFunction<any>,
	videoWatch?: FieldPolicy<any> | FieldReadFunction<any>,
	videoWatchCompleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NeedKeySpecifier = ('imageUrl' | 'index' | 'name' | 'settings' | 'slug' | NeedKeySpecifier)[];
export type NeedFieldPolicy = {
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NextBillingCycleKeySpecifier = ('amount' | 'billingDate' | 'paymentStatus' | 'planName' | NextBillingCycleKeySpecifier)[];
export type NextBillingCycleFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	billingDate?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	planName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OnboardingChoicesKeySpecifier = ('interests' | 'topics' | OnboardingChoicesKeySpecifier)[];
export type OnboardingChoicesFieldPolicy = {
	interests?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OptionsKeySpecifier = ('professionLabels' | 'professions' | OptionsKeySpecifier)[];
export type OptionsFieldPolicy = {
	professionLabels?: FieldPolicy<any> | FieldReadFunction<any>,
	professions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderPaymentInterfaceKeySpecifier = ('amountCents' | 'amountCurrency' | 'orderId' | 'originalAmountCents' | 'paymentProvider' | 'state' | 'success' | OrderPaymentInterfaceKeySpecifier)[];
export type OrderPaymentInterfaceFieldPolicy = {
	amountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	amountCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAmountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OtherFeaturesSectionKeySpecifier = ('description' | 'otherFeatures' | 'title' | OtherFeaturesSectionKeySpecifier)[];
export type OtherFeaturesSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	otherFeatures?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OverviewPlaylistKeySpecifier = ('name' | 'playlistId' | 'term' | OverviewPlaylistKeySpecifier)[];
export type OverviewPlaylistFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	playlistId?: FieldPolicy<any> | FieldReadFunction<any>,
	term?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('assets' | 'blogPosts' | 'content' | 'externalLede' | 'externalTitle' | 'id' | 'internalLede' | 'internalTitle' | 'kind' | 'name' | 'path' | 'playlists' | 'programs' | 'programsDetails' | 'slug' | 'taxonomies' | 'testimonials' | 'trailerVideo' | 'utmCampaign' | 'videos' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	blogPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	externalLede?: FieldPolicy<any> | FieldReadFunction<any>,
	externalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	internalLede?: FieldPolicy<any> | FieldReadFunction<any>,
	internalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	programs?: FieldPolicy<any> | FieldReadFunction<any>,
	programsDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomies?: FieldPolicy<any> | FieldReadFunction<any>,
	testimonials?: FieldPolicy<any> | FieldReadFunction<any>,
	trailerVideo?: FieldPolicy<any> | FieldReadFunction<any>,
	utmCampaign?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageAssetsKeySpecifier = ('externalImage' | 'internalImage' | 'ledeVideos' | 'titleImage' | 'titleVideo' | PageAssetsKeySpecifier)[];
export type PageAssetsFieldPolicy = {
	externalImage?: FieldPolicy<any> | FieldReadFunction<any>,
	internalImage?: FieldPolicy<any> | FieldReadFunction<any>,
	ledeVideos?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImage?: FieldPolicy<any> | FieldReadFunction<any>,
	titleVideo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageContentKeySpecifier = ('body' | 'body1' | 'body2' | 'body3' | 'body4' | 'body5' | 'body6' | 'englishTitle' | 'externalLede' | 'externalTitle' | 'extraImages' | 'internalLede' | 'internalTitle' | 'lede' | 'localLanguageTitle' | 'sanskritTitle' | 'subtitle' | PageContentKeySpecifier)[];
export type PageContentFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	body1?: FieldPolicy<any> | FieldReadFunction<any>,
	body2?: FieldPolicy<any> | FieldReadFunction<any>,
	body3?: FieldPolicy<any> | FieldReadFunction<any>,
	body4?: FieldPolicy<any> | FieldReadFunction<any>,
	body5?: FieldPolicy<any> | FieldReadFunction<any>,
	body6?: FieldPolicy<any> | FieldReadFunction<any>,
	englishTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	externalLede?: FieldPolicy<any> | FieldReadFunction<any>,
	externalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	extraImages?: FieldPolicy<any> | FieldReadFunction<any>,
	internalLede?: FieldPolicy<any> | FieldReadFunction<any>,
	internalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	lede?: FieldPolicy<any> | FieldReadFunction<any>,
	localLanguageTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	sanskritTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageSectionKeySpecifier = ('description' | 'imageUrl' | 'name' | 'otherType' | 'sectionType' | 'slug' | 'title' | 'url' | PageSectionKeySpecifier)[];
export type PageSectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	otherType?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionType?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedBlogPostsKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedBlogPostsKeySpecifier)[];
export type PagedBlogPostsFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedBundlesKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedBundlesKeySpecifier)[];
export type PagedBundlesFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedGenericProgramsKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedGenericProgramsKeySpecifier)[];
export type PagedGenericProgramsFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedInstructorsKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedInstructorsKeySpecifier)[];
export type PagedInstructorsFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedInterfaceKeySpecifier = ('page' | 'perPage' | 'totalCount' | PagedInterfaceKeySpecifier)[];
export type PagedInterfaceFieldPolicy = {
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedLiveEventsKeySpecifier = ('availableKinds' | 'data' | 'page' | 'perPage' | 'totalCount' | PagedLiveEventsKeySpecifier)[];
export type PagedLiveEventsFieldPolicy = {
	availableKinds?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedPagesKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedPagesKeySpecifier)[];
export type PagedPagesFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedPlaylistsKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedPlaylistsKeySpecifier)[];
export type PagedPlaylistsFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedSurveysKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedSurveysKeySpecifier)[];
export type PagedSurveysFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedUsersKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedUsersKeySpecifier)[];
export type PagedUsersFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PagedVideosKeySpecifier = ('data' | 'page' | 'perPage' | 'totalCount' | PagedVideosKeySpecifier)[];
export type PagedVideosFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParticipateInAnEventPayloadKeySpecifier = ('amountCents' | 'amountCurrency' | 'errors' | 'liveEvent' | 'message' | 'success' | 'user' | ParticipateInAnEventPayloadKeySpecifier)[];
export type ParticipateInAnEventPayloadFieldPolicy = {
	amountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	amountCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PatchPlaylistPayloadKeySpecifier = ('playlist' | PatchPlaylistPayloadKeySpecifier)[];
export type PatchPlaylistPayloadFieldPolicy = {
	playlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PatchStoryPayloadKeySpecifier = ('story' | PatchStoryPayloadKeySpecifier)[];
export type PatchStoryPayloadFieldPolicy = {
	story?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayForItemPayloadKeySpecifier = ('errors' | 'orderId' | 'resultAction' | 'resultCode' | 'transaction' | PayForItemPayloadKeySpecifier)[];
export type PayForItemPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	resultAction?: FieldPolicy<any> | FieldReadFunction<any>,
	resultCode?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayForVoucherPayloadKeySpecifier = ('errors' | 'orderId' | 'resultAction' | 'resultCode' | 'transaction' | PayForVoucherPayloadKeySpecifier)[];
export type PayForVoucherPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	resultAction?: FieldPolicy<any> | FieldReadFunction<any>,
	resultCode?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentKeySpecifier = ('amount' | 'currency' | 'date' | 'downloadUrl' | 'mobilePayment' | 'months' | 'number' | 'paymentProvider' | 'paymentType' | 'transact' | PaymentKeySpecifier)[];
export type PaymentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	mobilePayment?: FieldPolicy<any> | FieldReadFunction<any>,
	months?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentType?: FieldPolicy<any> | FieldReadFunction<any>,
	transact?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentMethodKeySpecifier = ('expiryMonth' | 'expiryYear' | 'fallback' | 'id' | 'isDefault' | 'lastFour' | 'name' | 'provider' | 'status' | 'variant' | PaymentMethodKeySpecifier)[];
export type PaymentMethodFieldPolicy = {
	expiryMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	expiryYear?: FieldPolicy<any> | FieldReadFunction<any>,
	fallback?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	lastFour?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentResponseKeySpecifier = ('formFields' | 'url' | PaymentResponseKeySpecifier)[];
export type PaymentResponseFieldPolicy = {
	formFields?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhasedProgramKeySpecifier = ('id' | 'intro' | 'outro' | 'phases' | 'slug' | PhasedProgramKeySpecifier)[];
export type PhasedProgramFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	intro?: FieldPolicy<any> | FieldReadFunction<any>,
	outro?: FieldPolicy<any> | FieldReadFunction<any>,
	phases?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayOverviewKeySpecifier = ('challenges' | 'liveEvents' | 'needs' | 'playlists' | 'programs' | 'videoSettings' | 'videos' | PlayOverviewKeySpecifier)[];
export type PlayOverviewFieldPolicy = {
	challenges?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	needs?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	programs?: FieldPolicy<any> | FieldReadFunction<any>,
	videoSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaylistKeySpecifier = ('assets' | 'description' | 'favorited' | 'id' | 'identifier' | 'languages' | 'meta' | 'owner' | 'public' | 'publishedState' | 'removedText' | 'thumbnailUrl' | 'title' | 'userName' | 'videos' | 'visibility' | PlaylistKeySpecifier)[];
export type PlaylistFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	favorited?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedState?: FieldPolicy<any> | FieldReadFunction<any>,
	removedText?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	userName?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaylistAssetsKeySpecifier = ('thumbnailUrl' | PlaylistAssetsKeySpecifier)[];
export type PlaylistAssetsFieldPolicy = {
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaylistStatusKeySpecifier = ('destroyed' | PlaylistStatusKeySpecifier)[];
export type PlaylistStatusFieldPolicy = {
	destroyed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreferencesKeySpecifier = ('contentLanguages' | 'excludeTerms' | 'preferTerms' | 'searchFilters' | 'videoLevels' | PreferencesKeySpecifier)[];
export type PreferencesFieldPolicy = {
	contentLanguages?: FieldPolicy<any> | FieldReadFunction<any>,
	excludeTerms?: FieldPolicy<any> | FieldReadFunction<any>,
	preferTerms?: FieldPolicy<any> | FieldReadFunction<any>,
	searchFilters?: FieldPolicy<any> | FieldReadFunction<any>,
	videoLevels?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceKeySpecifier = ('currency' | 'discountApplied' | 'discountedPrice' | 'originalPrice' | PriceKeySpecifier)[];
export type PriceFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	discountApplied?: FieldPolicy<any> | FieldReadFunction<any>,
	discountedPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	originalPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PrivacySettingsKeySpecifier = ('isPrivateFavorites' | 'isPrivateHistory' | 'isPrivatePlaylists' | 'isPrivateProfile' | 'isPrivateStats' | PrivacySettingsKeySpecifier)[];
export type PrivacySettingsFieldPolicy = {
	isPrivateFavorites?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivateHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivatePlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivateProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivateStats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProcessingErrorKeySpecifier = ('message' | 'status' | ProcessingErrorKeySpecifier)[];
export type ProcessingErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileKeySpecifier = ('displayName' | 'facebookURL' | 'instagramURL' | 'linkedinURL' | 'shortBio' | 'subtitle' | 'timezone' | ProfileKeySpecifier)[];
export type ProfileFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	facebookURL?: FieldPolicy<any> | FieldReadFunction<any>,
	instagramURL?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedinURL?: FieldPolicy<any> | FieldReadFunction<any>,
	shortBio?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramKeySpecifier = ('body' | 'category' | 'children' | 'duration' | 'id' | 'instructorIds' | 'instructors' | 'kind' | 'language' | 'lede' | 'legacy' | 'name' | 'postRollQuiz' | 'preRollQuiz' | 'progressIsCurrent' | 'progressNext' | 'progressPercentage' | 'progressState' | 'quizCount' | 'shortDescription' | 'slug' | 'tags' | 'themes' | 'title' | 'titleImageUrl' | 'video' | 'videoCount' | 'videoId' | 'videoObject' | 'weekCount' | ProgramKeySpecifier)[];
export type ProgramFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	instructorIds?: FieldPolicy<any> | FieldReadFunction<any>,
	instructors?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	lede?: FieldPolicy<any> | FieldReadFunction<any>,
	legacy?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	postRollQuiz?: FieldPolicy<any> | FieldReadFunction<any>,
	preRollQuiz?: FieldPolicy<any> | FieldReadFunction<any>,
	progressIsCurrent?: FieldPolicy<any> | FieldReadFunction<any>,
	progressNext?: FieldPolicy<any> | FieldReadFunction<any>,
	progressPercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	progressState?: FieldPolicy<any> | FieldReadFunction<any>,
	quizCount?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	themes?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>,
	videoCount?: FieldPolicy<any> | FieldReadFunction<any>,
	videoId?: FieldPolicy<any> | FieldReadFunction<any>,
	videoObject?: FieldPolicy<any> | FieldReadFunction<any>,
	weekCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramAccessKeySpecifier = ('accessStatus' | 'accessUntil' | 'program' | 'progressPercentage' | ProgramAccessKeySpecifier)[];
export type ProgramAccessFieldPolicy = {
	accessStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	program?: FieldPolicy<any> | FieldReadFunction<any>,
	progressPercentage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramActiveStateKeySpecifier = ('day' | 'phase' | 'sequence' | ProgramActiveStateKeySpecifier)[];
export type ProgramActiveStateFieldPolicy = {
	day?: FieldPolicy<any> | FieldReadFunction<any>,
	phase?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramDocumentKeySpecifier = ('description' | 'document' | 'finished' | 'id' | 'kind' | 'locked' | 'position' | 'positionLabel' | 'progressIsCurrent' | 'slug' | 'subheader' | 'title' | ProgramDocumentKeySpecifier)[];
export type ProgramDocumentFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	positionLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	progressIsCurrent?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	subheader?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramMetaKeySpecifier = ('description' | 'imageUrl' | 'title' | ProgramMetaKeySpecifier)[];
export type ProgramMetaFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramPartElementKeySpecifier = ('description' | 'finished' | 'id' | 'kind' | 'locked' | 'position' | 'positionLabel' | 'progressIsCurrent' | 'slug' | 'subheader' | 'title' | ProgramPartElementKeySpecifier)[];
export type ProgramPartElementFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	positionLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	progressIsCurrent?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	subheader?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramPhaseKeySpecifier = ('description' | 'finished' | 'id' | 'label' | 'locked' | 'progress' | 'slug' | 'weeks' | ProgramPhaseKeySpecifier)[];
export type ProgramPhaseFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	weeks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramSurveyKeySpecifier = ('finished' | 'id' | 'kind' | 'label' | 'link' | 'locked' | ProgramSurveyKeySpecifier)[];
export type ProgramSurveyFieldPolicy = {
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramSurveyCompletionKeySpecifier = ('programAccessId' | 'programSurveyId' | ProgramSurveyCompletionKeySpecifier)[];
export type ProgramSurveyCompletionFieldPolicy = {
	programAccessId?: FieldPolicy<any> | FieldReadFunction<any>,
	programSurveyId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramSurveyElementKeySpecifier = ('description' | 'finished' | 'id' | 'lastSubmittedAt' | 'locked' | 'position' | 'positionLabel' | 'progressIsCurrent' | 'slug' | 'subheader' | 'survey' | 'surveysAnswer' | 'title' | ProgramSurveyElementKeySpecifier)[];
export type ProgramSurveyElementFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	positionLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	progressIsCurrent?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	subheader?: FieldPolicy<any> | FieldReadFunction<any>,
	survey?: FieldPolicy<any> | FieldReadFunction<any>,
	surveysAnswer?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramVideoKeySpecifier = ('customDescription' | 'customTitle' | 'finished' | 'id' | 'locked' | 'position' | 'positionLabel' | 'postMoodTracker' | 'preMoodTracker' | 'progressIsCurrent' | 'repeatRecomendation' | 'slug' | 'subheader' | 'title' | 'video' | 'videoKind' | 'watched' | ProgramVideoKeySpecifier)[];
export type ProgramVideoFieldPolicy = {
	customDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	customTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	positionLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	postMoodTracker?: FieldPolicy<any> | FieldReadFunction<any>,
	preMoodTracker?: FieldPolicy<any> | FieldReadFunction<any>,
	progressIsCurrent?: FieldPolicy<any> | FieldReadFunction<any>,
	repeatRecomendation?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	subheader?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>,
	videoKind?: FieldPolicy<any> | FieldReadFunction<any>,
	watched?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramWeekKeySpecifier = ('description' | 'elements' | 'finished' | 'id' | 'label' | 'locked' | 'progress' | 'slug' | 'videos' | ProgramWeekKeySpecifier)[];
export type ProgramWeekFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	elements?: FieldPolicy<any> | FieldReadFunction<any>,
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgramsDetailsKeySpecifier = ('description' | 'instructor' | 'label' | 'perks' | 'title' | 'video' | ProgramsDetailsKeySpecifier)[];
export type ProgramsDetailsFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	instructor?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	perks?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromotionCodeKeySpecifier = ('code' | 'creationDate' | 'expirationDate' | 'matchingResources' | 'provider' | 'usageLimit' | 'usedIn' | PromotionCodeKeySpecifier)[];
export type PromotionCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	creationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	expirationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	matchingResources?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	usageLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	usedIn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromotionCodeUserKeySpecifier = ('live' | 'usageDate' | PromotionCodeUserKeySpecifier)[];
export type PromotionCodeUserFieldPolicy = {
	live?: FieldPolicy<any> | FieldReadFunction<any>,
	usageDate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('activateCampaignCode' | 'autocomplete' | 'availableOneTimeCode' | 'availableSubscriptionPlans' | 'availableTrial' | 'availableTrialExtensions' | 'batchVideos' | 'bundle' | 'bundles' | 'campaignCode' | 'currentUser' | 'document' | 'emailCheck' | 'emailPreferences' | 'favoritePlaylists' | 'favoriteVideos' | 'flipperFlags' | 'genericProgram' | 'genericPrograms' | 'getFavoritePlaylists' | 'getFavoriteVideos' | 'getUser' | 'giftGenericProgram' | 'instructor' | 'instructorByGenre' | 'instructors' | 'lastWatchedSessions' | 'liveEvent' | 'liveEventCodes' | 'liveEvents' | 'myBundles' | 'myGenericPrograms' | 'myPaymentMethods' | 'onboardingChoices' | 'order' | 'overviewPlaylists' | 'pageByRoute' | 'pages' | 'pay' | 'phasedProgram' | 'playOverview' | 'playlist' | 'playlists' | 'posts' | 'precheckMobileSubscription' | 'predictedLtv' | 'program' | 'programActiveState' | 'programById' | 'programBySlug' | 'programSurveyCompletion' | 'programThemes' | 'receipts' | 'recentVideos' | 'recommendations' | 'recommendedOnboardingPlaylists' | 'recommendedOnboardingVideos' | 'recommendedPlaylists' | 'relatedPagesByRoute' | 'relatedVideos' | 'search' | 'searchSuggestions' | 'specificSearch' | 'startOverview' | 'subPagesByRoute' | 'survey' | 'surveyPart' | 'surveys' | 'taxonomies' | 'testimonials' | 'userOptions' | 'userPlaylists' | 'userStats' | 'users' | 'validateBundleCode' | 'validateLiveEventCode' | 'validateSubscriptionTransfer' | 'video' | 'videos' | 'videosByFeature' | 'waitingListBundles' | 'weeklyProgram' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	activateCampaignCode?: FieldPolicy<any> | FieldReadFunction<any>,
	autocomplete?: FieldPolicy<any> | FieldReadFunction<any>,
	availableOneTimeCode?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSubscriptionPlans?: FieldPolicy<any> | FieldReadFunction<any>,
	availableTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	availableTrialExtensions?: FieldPolicy<any> | FieldReadFunction<any>,
	batchVideos?: FieldPolicy<any> | FieldReadFunction<any>,
	bundle?: FieldPolicy<any> | FieldReadFunction<any>,
	bundles?: FieldPolicy<any> | FieldReadFunction<any>,
	campaignCode?: FieldPolicy<any> | FieldReadFunction<any>,
	currentUser?: FieldPolicy<any> | FieldReadFunction<any>,
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	emailCheck?: FieldPolicy<any> | FieldReadFunction<any>,
	emailPreferences?: FieldPolicy<any> | FieldReadFunction<any>,
	favoritePlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	favoriteVideos?: FieldPolicy<any> | FieldReadFunction<any>,
	flipperFlags?: FieldPolicy<any> | FieldReadFunction<any>,
	genericProgram?: FieldPolicy<any> | FieldReadFunction<any>,
	genericPrograms?: FieldPolicy<any> | FieldReadFunction<any>,
	getFavoritePlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	getFavoriteVideos?: FieldPolicy<any> | FieldReadFunction<any>,
	getUser?: FieldPolicy<any> | FieldReadFunction<any>,
	giftGenericProgram?: FieldPolicy<any> | FieldReadFunction<any>,
	instructor?: FieldPolicy<any> | FieldReadFunction<any>,
	instructorByGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	instructors?: FieldPolicy<any> | FieldReadFunction<any>,
	lastWatchedSessions?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEventCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	myBundles?: FieldPolicy<any> | FieldReadFunction<any>,
	myGenericPrograms?: FieldPolicy<any> | FieldReadFunction<any>,
	myPaymentMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingChoices?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	overviewPlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	pageByRoute?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	pay?: FieldPolicy<any> | FieldReadFunction<any>,
	phasedProgram?: FieldPolicy<any> | FieldReadFunction<any>,
	playOverview?: FieldPolicy<any> | FieldReadFunction<any>,
	playlist?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	precheckMobileSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	predictedLtv?: FieldPolicy<any> | FieldReadFunction<any>,
	program?: FieldPolicy<any> | FieldReadFunction<any>,
	programActiveState?: FieldPolicy<any> | FieldReadFunction<any>,
	programById?: FieldPolicy<any> | FieldReadFunction<any>,
	programBySlug?: FieldPolicy<any> | FieldReadFunction<any>,
	programSurveyCompletion?: FieldPolicy<any> | FieldReadFunction<any>,
	programThemes?: FieldPolicy<any> | FieldReadFunction<any>,
	receipts?: FieldPolicy<any> | FieldReadFunction<any>,
	recentVideos?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendations?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendedOnboardingPlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendedOnboardingVideos?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendedPlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedPagesByRoute?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedVideos?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>,
	searchSuggestions?: FieldPolicy<any> | FieldReadFunction<any>,
	specificSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	startOverview?: FieldPolicy<any> | FieldReadFunction<any>,
	subPagesByRoute?: FieldPolicy<any> | FieldReadFunction<any>,
	survey?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyPart?: FieldPolicy<any> | FieldReadFunction<any>,
	surveys?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomies?: FieldPolicy<any> | FieldReadFunction<any>,
	testimonials?: FieldPolicy<any> | FieldReadFunction<any>,
	userOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	userPlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	userStats?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	validateBundleCode?: FieldPolicy<any> | FieldReadFunction<any>,
	validateLiveEventCode?: FieldPolicy<any> | FieldReadFunction<any>,
	validateSubscriptionTransfer?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>,
	videosByFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	waitingListBundles?: FieldPolicy<any> | FieldReadFunction<any>,
	weeklyProgram?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecommendationsKeySpecifier = ('courses' | 'playlists' | 'videos' | RecommendationsKeySpecifier)[];
export type RecommendationsFieldPolicy = {
	courses?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegistrationDetailKeySpecifier = ('campaign' | 'campaignCode' | 'paymentType' | 'redirectTo' | RegistrationDetailKeySpecifier)[];
export type RegistrationDetailFieldPolicy = {
	campaign?: FieldPolicy<any> | FieldReadFunction<any>,
	campaignCode?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentType?: FieldPolicy<any> | FieldReadFunction<any>,
	redirectTo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegistrationPayloadKeySpecifier = ('errors' | 'user' | RegistrationPayloadKeySpecifier)[];
export type RegistrationPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegistrationV2PayloadKeySpecifier = ('errors' | 'user' | RegistrationV2PayloadKeySpecifier)[];
export type RegistrationV2PayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveVideoFromPlaylistPayloadKeySpecifier = ('playlist' | RemoveVideoFromPlaylistPayloadKeySpecifier)[];
export type RemoveVideoFromPlaylistPayloadFieldPolicy = {
	playlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResendConfirmationEmailPayloadKeySpecifier = ('success' | ResendConfirmationEmailPayloadKeySpecifier)[];
export type ResendConfirmationEmailPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetEmailConfirmationPayloadKeySpecifier = ('success' | ResetEmailConfirmationPayloadKeySpecifier)[];
export type ResetEmailConfirmationPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordPayloadKeySpecifier = ('success' | ResetPasswordPayloadKeySpecifier)[];
export type ResetPasswordPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetSummerCampaignPayloadKeySpecifier = ('action' | 'errors' | ResetSummerCampaignPayloadKeySpecifier)[];
export type ResetSummerCampaignPayloadFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RestoreMobileSubscriptionPayloadKeySpecifier = ('errors' | 'user' | RestoreMobileSubscriptionPayloadKeySpecifier)[];
export type RestoreMobileSubscriptionPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaveOnboardingChoicesPayloadKeySpecifier = ('errors' | 'success' | 'user' | SaveOnboardingChoicesPayloadKeySpecifier)[];
export type SaveOnboardingChoicesPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SavePhasedProgramProgressPayloadKeySpecifier = ('errors' | SavePhasedProgramProgressPayloadKeySpecifier)[];
export type SavePhasedProgramProgressPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaveProgramProgressPayloadKeySpecifier = ('errors' | SaveProgramProgressPayloadKeySpecifier)[];
export type SaveProgramProgressPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchKeySpecifier = ('blogPosts' | 'challenges' | 'courses' | 'events' | 'genericPrograms' | 'instructors' | 'landingPages' | 'liveEvents' | 'playlists' | 'query' | 'suggestions' | 'videos' | SearchKeySpecifier)[];
export type SearchFieldPolicy = {
	blogPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	challenges?: FieldPolicy<any> | FieldReadFunction<any>,
	courses?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	genericPrograms?: FieldPolicy<any> | FieldReadFunction<any>,
	instructors?: FieldPolicy<any> | FieldReadFunction<any>,
	landingPages?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestions?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchBlogPostKeySpecifier = ('featuredImageUrl' | 'id' | 'slug' | 'title' | SearchBlogPostKeySpecifier)[];
export type SearchBlogPostFieldPolicy = {
	featuredImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchEventKeySpecifier = ('description' | 'endsAt' | 'id' | 'instructor' | 'location' | 'name' | 'slug' | 'startsAt' | 'titleImageUrl' | SearchEventKeySpecifier)[];
export type SearchEventFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	endsAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	instructor?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	startsAt?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImageUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchGenericProgramKeySpecifier = ('accessPeriod' | 'category' | 'description' | 'durationUnit' | 'durationValue' | 'id' | 'instructorName' | 'instructorSlug' | 'price' | 'priceType' | 'slug' | 'themes' | 'title' | 'titleImageUrl' | SearchGenericProgramKeySpecifier)[];
export type SearchGenericProgramFieldPolicy = {
	accessPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	durationUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	durationValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	instructorName?: FieldPolicy<any> | FieldReadFunction<any>,
	instructorSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	priceType?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	themes?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImageUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchInstructorKeySpecifier = ('description' | 'id' | 'name' | 'slug' | 'squareImageUrl' | SearchInstructorKeySpecifier)[];
export type SearchInstructorFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	squareImageUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchLandingPageKeySpecifier = ('id' | 'lede' | 'locale' | 'slug' | 'title' | SearchLandingPageKeySpecifier)[];
export type SearchLandingPageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lede?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchLiveEventKeySpecifier = ('availableSpots' | 'bookingAvailable' | 'duration' | 'eventDates' | 'id' | 'instructorName' | 'instructorSlug' | 'kind' | 'maximumParticipants' | 'registrationEndDate' | 'registrationStartDate' | 'slug' | 'theme' | 'thumbnailUrl' | 'title' | SearchLiveEventKeySpecifier)[];
export type SearchLiveEventFieldPolicy = {
	availableSpots?: FieldPolicy<any> | FieldReadFunction<any>,
	bookingAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	eventDates?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	instructorName?: FieldPolicy<any> | FieldReadFunction<any>,
	instructorSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumParticipants?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationEndDate?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationStartDate?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	theme?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchPlaylistKeySpecifier = ('description' | 'id' | 'identifier' | 'minutes' | 'ownerId' | 'thumbnailUrl' | 'title' | 'videoCount' | 'visibility' | SearchPlaylistKeySpecifier)[];
export type SearchPlaylistFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	minutes?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerId?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	videoCount?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultsKeySpecifier = ('page' | 'perPage' | 'results' | 'totalCount' | SearchResultsKeySpecifier)[];
export type SearchResultsFieldPolicy = {
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchVideoKeySpecifier = ('id' | 'identifier' | 'instructorName' | 'instructorSlug' | 'kind' | 'longDescription' | 'minutes' | 'primaryStyleName' | 'primaryStyleSlug' | 'shortDescription' | 'thumbnailUrl' | 'title' | SearchVideoKeySpecifier)[];
export type SearchVideoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	instructorName?: FieldPolicy<any> | FieldReadFunction<any>,
	instructorSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	longDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	minutes?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryStyleName?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryStyleSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SignInPayloadKeySpecifier = ('success' | 'user' | SignInPayloadKeySpecifier)[];
export type SignInPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SignUpPayloadKeySpecifier = ('success' | 'user' | SignUpPayloadKeySpecifier)[];
export type SignUpPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SpecialSectionKeySpecifier = ('assetUrl' | 'content' | 'description' | 'id' | 'label' | 'slug' | 'videos' | SpecialSectionKeySpecifier)[];
export type SpecialSectionFieldPolicy = {
	assetUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SpecificSearchKeySpecifier = ('blogPosts' | 'challenges' | 'courses' | 'events' | 'genericPrograms' | 'instructors' | 'landingPages' | 'liveEvents' | 'playlists' | 'query' | 'suggestions' | 'videos' | SpecificSearchKeySpecifier)[];
export type SpecificSearchFieldPolicy = {
	blogPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	challenges?: FieldPolicy<any> | FieldReadFunction<any>,
	courses?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	genericPrograms?: FieldPolicy<any> | FieldReadFunction<any>,
	instructors?: FieldPolicy<any> | FieldReadFunction<any>,
	landingPages?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestions?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StartOverviewKeySpecifier = ('campaignSection' | 'coursesSection' | 'ctaSection' | 'featuresSection' | 'genresSection' | 'heroSection' | 'metaSection' | 'mobileAppSection' | 'otherFeaturesSection' | 'videoLibrarySection' | StartOverviewKeySpecifier)[];
export type StartOverviewFieldPolicy = {
	campaignSection?: FieldPolicy<any> | FieldReadFunction<any>,
	coursesSection?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaSection?: FieldPolicy<any> | FieldReadFunction<any>,
	featuresSection?: FieldPolicy<any> | FieldReadFunction<any>,
	genresSection?: FieldPolicy<any> | FieldReadFunction<any>,
	heroSection?: FieldPolicy<any> | FieldReadFunction<any>,
	metaSection?: FieldPolicy<any> | FieldReadFunction<any>,
	mobileAppSection?: FieldPolicy<any> | FieldReadFunction<any>,
	otherFeaturesSection?: FieldPolicy<any> | FieldReadFunction<any>,
	videoLibrarySection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatisticsKeySpecifier = ('averageDuration' | 'favoriteStyle' | 'sessionsCompleted' | 'sessionsLastWeek' | 'totalTime' | StatisticsKeySpecifier)[];
export type StatisticsFieldPolicy = {
	averageDuration?: FieldPolicy<any> | FieldReadFunction<any>,
	favoriteStyle?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsLastWeek?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatsKeySpecifier = ('numberOfChallengesStarted' | 'numberOfCoursesStarted' | 'numberOfLiveEventsBooked' | 'numberOfProgramsStarted' | 'playlistsCreated' | 'sessionsCompleted' | 'sessionsFavorited' | 'threeMostWatchedInstructors' | 'threeMostWatchedStyles' | 'totalWatchTime' | StatsKeySpecifier)[];
export type StatsFieldPolicy = {
	numberOfChallengesStarted?: FieldPolicy<any> | FieldReadFunction<any>,
	numberOfCoursesStarted?: FieldPolicy<any> | FieldReadFunction<any>,
	numberOfLiveEventsBooked?: FieldPolicy<any> | FieldReadFunction<any>,
	numberOfProgramsStarted?: FieldPolicy<any> | FieldReadFunction<any>,
	playlistsCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsFavorited?: FieldPolicy<any> | FieldReadFunction<any>,
	threeMostWatchedInstructors?: FieldPolicy<any> | FieldReadFunction<any>,
	threeMostWatchedStyles?: FieldPolicy<any> | FieldReadFunction<any>,
	totalWatchTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreAdyenDropinPayloadKeySpecifier = ('errors' | 'orderId' | 'recurringDate' | 'recurringPaymentAmount' | 'recurringPaymentCurrency' | 'resultAction' | 'resultCode' | 'transaction' | StoreAdyenDropinPayloadKeySpecifier)[];
export type StoreAdyenDropinPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringDate?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringPaymentAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringPaymentCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	resultAction?: FieldPolicy<any> | FieldReadFunction<any>,
	resultCode?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StorePaymentDetailsPayloadKeySpecifier = ('action' | 'errors' | 'orderId' | 'resultAction' | 'resultCode' | 'transaction' | StorePaymentDetailsPayloadKeySpecifier)[];
export type StorePaymentDetailsPayloadFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	resultAction?: FieldPolicy<any> | FieldReadFunction<any>,
	resultCode?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreTransactionIdPayloadKeySpecifier = ('errors' | 'statusCode' | 'validationMessage' | StoreTransactionIdPayloadKeySpecifier)[];
export type StoreTransactionIdPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	statusCode?: FieldPolicy<any> | FieldReadFunction<any>,
	validationMessage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreTrustlyPayloadKeySpecifier = ('errors' | 'orderId' | 'recurringDate' | 'recurringPaymentAmount' | 'recurringPaymentCurrency' | 'resultUrl' | 'transaction' | StoreTrustlyPayloadKeySpecifier)[];
export type StoreTrustlyPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringDate?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringPaymentAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringPaymentCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	resultUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreUserDecisionPayloadKeySpecifier = ('user' | StoreUserDecisionPayloadKeySpecifier)[];
export type StoreUserDecisionPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryKeySpecifier = ('createdAt' | 'hasAccess' | 'id' | 'progress' | 'resourceClass' | 'resourceId' | 'updatedAt' | 'userId' | StoryKeySpecifier)[];
export type StoryFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hasAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceClass?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmitInterestFormPayloadKeySpecifier = ('errors' | SubmitInterestFormPayloadKeySpecifier)[];
export type SubmitInterestFormPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('currentSubscriptionPlan' | 'inTrialPeriod' | 'provider' | 'status' | 'trialExpiration' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	currentSubscriptionPlan?: FieldPolicy<any> | FieldReadFunction<any>,
	inTrialPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	trialExpiration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionPaymentKeySpecifier = ('amountCents' | 'amountCurrency' | 'months' | 'orderId' | 'originalAmountCents' | 'paymentProvider' | 'recurringAmountCents' | 'recurringDate' | 'state' | 'success' | SubscriptionPaymentKeySpecifier)[];
export type SubscriptionPaymentFieldPolicy = {
	amountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	amountCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	months?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAmountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringAmountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringDate?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionPlanKeySpecifier = ('amountCents' | 'amountCurrency' | 'planType' | 'platform' | 'productId' | SubscriptionPlanKeySpecifier)[];
export type SubscriptionPlanFieldPolicy = {
	amountCents?: FieldPolicy<any> | FieldReadFunction<any>,
	amountCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	planType?: FieldPolicy<any> | FieldReadFunction<any>,
	platform?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyKeySpecifier = ('content' | 'description' | 'id' | 'name' | 'questions' | 'slug' | SurveyKeySpecifier)[];
export type SurveyFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	questions?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyAnswerKeySpecifier = ('content' | 'contextableType' | 'id' | 'state' | 'userId' | SurveyAnswerKeySpecifier)[];
export type SurveyAnswerFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contextableType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyContentKeySpecifier = ('page1Description' | 'page1Title' | 'page2Description' | 'page2Title' | 'page3ButtonText' | 'page3ButtonUrl' | 'page3Description' | 'page3Title' | SurveyContentKeySpecifier)[];
export type SurveyContentFieldPolicy = {
	page1Description?: FieldPolicy<any> | FieldReadFunction<any>,
	page1Title?: FieldPolicy<any> | FieldReadFunction<any>,
	page2Description?: FieldPolicy<any> | FieldReadFunction<any>,
	page2Title?: FieldPolicy<any> | FieldReadFunction<any>,
	page3ButtonText?: FieldPolicy<any> | FieldReadFunction<any>,
	page3ButtonUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	page3Description?: FieldPolicy<any> | FieldReadFunction<any>,
	page3Title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyOptionsKeySpecifier = ('default' | 'hint' | 'leftLabel' | 'maxValue' | 'minValue' | 'required' | 'rightLabel' | 'type' | 'useForNps' | SurveyOptionsKeySpecifier)[];
export type SurveyOptionsFieldPolicy = {
	default?: FieldPolicy<any> | FieldReadFunction<any>,
	hint?: FieldPolicy<any> | FieldReadFunction<any>,
	leftLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	maxValue?: FieldPolicy<any> | FieldReadFunction<any>,
	minValue?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	rightLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	useForNps?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyQuestionKeySpecifier = ('answers' | 'id' | 'options' | 'question' | SurveyQuestionKeySpecifier)[];
export type SurveyQuestionFieldPolicy = {
	answers?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	question?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyKeySpecifier = ('bodyparts' | 'duration' | 'flavor' | 'genre' | 'instructors' | 'needs' | 'props' | 'styles' | 'tags' | TaxonomyKeySpecifier)[];
export type TaxonomyFieldPolicy = {
	bodyparts?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	flavor?: FieldPolicy<any> | FieldReadFunction<any>,
	genre?: FieldPolicy<any> | FieldReadFunction<any>,
	instructors?: FieldPolicy<any> | FieldReadFunction<any>,
	needs?: FieldPolicy<any> | FieldReadFunction<any>,
	props?: FieldPolicy<any> | FieldReadFunction<any>,
	styles?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyForLandingPageKeySpecifier = ('duration' | 'genre' | 'instructors' | TaxonomyForLandingPageKeySpecifier)[];
export type TaxonomyForLandingPageFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	genre?: FieldPolicy<any> | FieldReadFunction<any>,
	instructors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyItemKeySpecifier = ('genres' | 'hasPrio' | 'hierarchical' | 'id' | 'languages' | 'name' | 'slug' | 'terms' | 'types' | TaxonomyItemKeySpecifier)[];
export type TaxonomyItemFieldPolicy = {
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPrio?: FieldPolicy<any> | FieldReadFunction<any>,
	hierarchical?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	terms?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermKeySpecifier = ('genres' | 'id' | 'important' | 'languages' | 'name' | 'prio' | 'selected' | 'slug' | 'titleImageUrl' | 'types' | TermKeySpecifier)[];
export type TermFieldPolicy = {
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	important?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	prio?: FieldPolicy<any> | FieldReadFunction<any>,
	selected?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	titleImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestimonialKeySpecifier = ('id' | 'imageUrl' | 'name' | 'quote' | 'title' | TestimonialKeySpecifier)[];
export type TestimonialFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	quote?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicKeySpecifier = ('hasContent' | 'id' | 'imageUrl' | 'name' | 'slug' | TopicKeySpecifier)[];
export type TopicFieldPolicy = {
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TrialKeySpecifier = ('claimedAt' | 'endDate' | 'id' | 'periodDays' | 'subscriptionPlanType' | TrialKeySpecifier)[];
export type TrialFieldPolicy = {
	claimedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	periodDays?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionPlanType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TwentyThreeKeySpecifier = ('iframeUrl' | TwentyThreeKeySpecifier)[];
export type TwentyThreeFieldPolicy = {
	iframeUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePaymentMethodSettingsPayloadKeySpecifier = ('errors' | 'success' | UpdatePaymentMethodSettingsPayloadKeySpecifier)[];
export type UpdatePaymentMethodSettingsPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('accessToken' | 'accessUntil' | 'accountActivatedAt' | 'address' | 'assets' | 'availableForTrial' | 'challengeParticipations' | 'city' | 'completedAt' | 'country' | 'courseAccesses' | 'dateOfBirth' | 'eligibleForDelete' | 'eligibleForStartDiscount' | 'eligibleForTrial' | 'email' | 'emailLanguage' | 'extraPayments' | 'favorites' | 'firstName' | 'gender' | 'group' | 'hasWebPayments' | 'id' | 'interests' | 'isEmailActivated' | 'isPublic' | 'kind' | 'lastName' | 'liveEventsAccess' | 'locale' | 'nextBillingCycle' | 'onboardingCompleted' | 'onboardingInterestsSkipped' | 'onboardingSkipped' | 'onboardingTopicsSkipped' | 'paymentFailedAt' | 'paymentType' | 'paymentTypeRenews' | 'phone' | 'playlists' | 'preferences' | 'previousEmail' | 'privacySettings' | 'profession' | 'profile' | 'programAccess' | 'programs' | 'provider' | 'receipts' | 'referralCode' | 'registrationDetail' | 'signUpPlatform' | 'slug' | 'statistics' | 'stories' | 'subscription' | 'topics' | 'trialPeriod' | 'url' | 'videoNotes' | 'zipcode' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	accountActivatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeParticipations?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	courseAccesses?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForStartDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPayments?: FieldPolicy<any> | FieldReadFunction<any>,
	favorites?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	hasWebPayments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interests?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailActivated?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEventsAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	nextBillingCycle?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingInterestsSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingTopicsSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentFailedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentType?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentTypeRenews?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	preferences?: FieldPolicy<any> | FieldReadFunction<any>,
	previousEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	privacySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	profession?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	programAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	programs?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	receipts?: FieldPolicy<any> | FieldReadFunction<any>,
	referralCode?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	signUpPlatform?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	statistics?: FieldPolicy<any> | FieldReadFunction<any>,
	stories?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	trialPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	videoNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	zipcode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAccessKeySpecifier = ('accessUntil' | 'active' | 'id' | 'user' | UserAccessKeySpecifier)[];
export type UserAccessFieldPolicy = {
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserInterfaceKeySpecifier = ('accessToken' | 'accessUntil' | 'accountActivatedAt' | 'address' | 'assets' | 'availableForTrial' | 'challengeParticipations' | 'city' | 'completedAt' | 'country' | 'courseAccesses' | 'dateOfBirth' | 'eligibleForDelete' | 'eligibleForStartDiscount' | 'eligibleForTrial' | 'email' | 'emailLanguage' | 'extraPayments' | 'favorites' | 'firstName' | 'gender' | 'group' | 'hasWebPayments' | 'id' | 'interests' | 'isEmailActivated' | 'isPublic' | 'kind' | 'lastName' | 'liveEventsAccess' | 'locale' | 'nextBillingCycle' | 'onboardingCompleted' | 'onboardingInterestsSkipped' | 'onboardingSkipped' | 'onboardingTopicsSkipped' | 'paymentFailedAt' | 'paymentType' | 'paymentTypeRenews' | 'phone' | 'playlists' | 'preferences' | 'previousEmail' | 'privacySettings' | 'profession' | 'profile' | 'programAccess' | 'programs' | 'provider' | 'receipts' | 'referralCode' | 'registrationDetail' | 'signUpPlatform' | 'slug' | 'statistics' | 'stories' | 'subscription' | 'topics' | 'trialPeriod' | 'url' | 'videoNotes' | 'zipcode' | UserInterfaceKeySpecifier)[];
export type UserInterfaceFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	accountActivatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeParticipations?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	courseAccesses?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForStartDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibleForTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPayments?: FieldPolicy<any> | FieldReadFunction<any>,
	favorites?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	hasWebPayments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interests?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailActivated?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	liveEventsAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	nextBillingCycle?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingInterestsSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	onboardingTopicsSkipped?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentFailedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentType?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentTypeRenews?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	playlists?: FieldPolicy<any> | FieldReadFunction<any>,
	preferences?: FieldPolicy<any> | FieldReadFunction<any>,
	previousEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	privacySettings?: FieldPolicy<any> | FieldReadFunction<any>,
	profession?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	programAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	programs?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	receipts?: FieldPolicy<any> | FieldReadFunction<any>,
	referralCode?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	signUpPlatform?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	statistics?: FieldPolicy<any> | FieldReadFunction<any>,
	stories?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	trialPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	videoNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	zipcode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSubscriptionKeySpecifier = ('accessUntil' | 'amount' | 'currency' | 'days' | 'description' | 'discountedAmount' | 'extraPromotion' | 'months' | 'platform' | 'productId' | 'promotionKind' | 'promotionName' | 'recurringPromotion' | 'shortDescription' | 'subscriptionName' | 'subscriptionPlan' | 'title' | UserSubscriptionKeySpecifier)[];
export type UserSubscriptionFieldPolicy = {
	accessUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	days?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	discountedAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPromotion?: FieldPolicy<any> | FieldReadFunction<any>,
	months?: FieldPolicy<any> | FieldReadFunction<any>,
	platform?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	promotionKind?: FieldPolicy<any> | FieldReadFunction<any>,
	promotionName?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringPromotion?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionName?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionPlan?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateCodeKeySpecifier = ('code' | 'codeDetails' | 'message' | 'status' | ValidateCodeKeySpecifier)[];
export type ValidateCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	codeDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidatePayloadKeySpecifier = ('errors' | 'program' | 'status' | 'url' | ValidatePayloadKeySpecifier)[];
export type ValidatePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	program?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateProgramCodePayloadKeySpecifier = ('code' | 'codeSource' | 'codeStatus' | 'codeType' | 'error' | 'price' | 'program' | ValidateProgramCodePayloadKeySpecifier)[];
export type ValidateProgramCodePayloadFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	codeSource?: FieldPolicy<any> | FieldReadFunction<any>,
	codeStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	codeType?: FieldPolicy<any> | FieldReadFunction<any>,
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	program?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateTokenPayloadKeySpecifier = ('errors' | 'status' | ValidateTokenPayloadKeySpecifier)[];
export type ValidateTokenPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateTransferKeySpecifier = ('errors' | 'valid' | ValidateTransferKeySpecifier)[];
export type ValidateTransferFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	valid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoKeySpecifier = ('assets' | 'categories' | 'content' | 'crossPromotion' | 'crossPromotionCourse' | 'crossPromotionModel' | 'cursorAt' | 'customThumbnailUrl' | 'durationInSeconds' | 'favorited' | 'fileAssets' | 'freeAccess' | 'hasAccess' | 'hls' | 'id' | 'identifier' | 'inPlaylists' | 'kind' | 'language' | 'longDescription' | 'meta' | 'minutes' | 'pinnedTo' | 'player' | 'primaryStyle' | 'protectionContinueTitle' | 'protectionMessage' | 'protectionTitle' | 'publishedAt' | 'quickstartCategory' | 'removedText' | 'shortDescription' | 'taxonomies' | 'thumbnailUrl' | 'thumbnailUrlMedium' | 'title' | 'twentythreeIframeUrl' | 'userPlaylists' | VideoKeySpecifier)[];
export type VideoFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	crossPromotion?: FieldPolicy<any> | FieldReadFunction<any>,
	crossPromotionCourse?: FieldPolicy<any> | FieldReadFunction<any>,
	crossPromotionModel?: FieldPolicy<any> | FieldReadFunction<any>,
	cursorAt?: FieldPolicy<any> | FieldReadFunction<any>,
	customThumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	durationInSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	favorited?: FieldPolicy<any> | FieldReadFunction<any>,
	fileAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	freeAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	hasAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	hls?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	inPlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	longDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	minutes?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedTo?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryStyle?: FieldPolicy<any> | FieldReadFunction<any>,
	protectionContinueTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	protectionMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	protectionTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	quickstartCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	removedText?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomies?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrlMedium?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	twentythreeIframeUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	userPlaylists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoAssetsKeySpecifier = ('thumbnailUrl' | 'thumbnailUrlMedium' | VideoAssetsKeySpecifier)[];
export type VideoAssetsFieldPolicy = {
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrlMedium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoContentKeySpecifier = ('longDescription' | 'shortDescription' | 'title' | VideoContentKeySpecifier)[];
export type VideoContentFieldPolicy = {
	longDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoFileAssetKeySpecifier = ('resolution' | 'size' | 'src' | VideoFileAssetKeySpecifier)[];
export type VideoFileAssetFieldPolicy = {
	resolution?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoInfoKeySpecifier = ('assets' | 'hasAccess' | 'twentyThree' | VideoInfoKeySpecifier)[];
export type VideoInfoFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	hasAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	twentyThree?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoInterfaceKeySpecifier = ('assets' | 'categories' | 'content' | 'crossPromotion' | 'crossPromotionCourse' | 'crossPromotionModel' | 'cursorAt' | 'customThumbnailUrl' | 'durationInSeconds' | 'favorited' | 'fileAssets' | 'freeAccess' | 'hasAccess' | 'hls' | 'id' | 'identifier' | 'inPlaylists' | 'kind' | 'language' | 'longDescription' | 'meta' | 'minutes' | 'pinnedTo' | 'player' | 'primaryStyle' | 'protectionContinueTitle' | 'protectionMessage' | 'protectionTitle' | 'publishedAt' | 'quickstartCategory' | 'removedText' | 'shortDescription' | 'taxonomies' | 'thumbnailUrl' | 'thumbnailUrlMedium' | 'title' | 'twentythreeIframeUrl' | 'userPlaylists' | VideoInterfaceKeySpecifier)[];
export type VideoInterfaceFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	crossPromotion?: FieldPolicy<any> | FieldReadFunction<any>,
	crossPromotionCourse?: FieldPolicy<any> | FieldReadFunction<any>,
	crossPromotionModel?: FieldPolicy<any> | FieldReadFunction<any>,
	cursorAt?: FieldPolicy<any> | FieldReadFunction<any>,
	customThumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	durationInSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	favorited?: FieldPolicy<any> | FieldReadFunction<any>,
	fileAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	freeAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	hasAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	hls?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	inPlaylists?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	longDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	minutes?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedTo?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryStyle?: FieldPolicy<any> | FieldReadFunction<any>,
	protectionContinueTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	protectionMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	protectionTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	quickstartCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	removedText?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomies?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrlMedium?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	twentythreeIframeUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	userPlaylists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoMetaKeySpecifier = ('freeAccess' | 'language' | 'minutes' | 'publishedAt' | VideoMetaKeySpecifier)[];
export type VideoMetaFieldPolicy = {
	freeAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	minutes?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideoNoteKeySpecifier = ('note' | 'videoId' | VideoNoteKeySpecifier)[];
export type VideoNoteFieldPolicy = {
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	videoId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideosCountByGenreKeySpecifier = ('channel' | 'count' | 'slug' | VideosCountByGenreKeySpecifier)[];
export type VideosCountByGenreFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideosLibrarySectionKeySpecifier = ('description' | 'title' | 'videosLibrary' | VideosLibrarySectionKeySpecifier)[];
export type VideosLibrarySectionFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	videosLibrary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WaitingItemInfoKeySpecifier = ('startDate' | 'waitingListEnabled' | 'waitingListEndDate' | 'waitingListStartDate' | WaitingItemInfoKeySpecifier)[];
export type WaitingItemInfoFieldPolicy = {
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	waitingListEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	waitingListEndDate?: FieldPolicy<any> | FieldReadFunction<any>,
	waitingListStartDate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WatchCompletedPayloadKeySpecifier = ('errors' | WatchCompletedPayloadKeySpecifier)[];
export type WatchCompletedPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WatchPayloadKeySpecifier = ('errors' | WatchPayloadKeySpecifier)[];
export type WatchPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WeeklyProgramKeySpecifier = ('description' | 'finished' | 'id' | 'intro' | 'outro' | 'progress' | 'recomendation' | 'slug' | 'tags' | 'weeks' | WeeklyProgramKeySpecifier)[];
export type WeeklyProgramFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	finished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	intro?: FieldPolicy<any> | FieldReadFunction<any>,
	outro?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	recomendation?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	weeks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccessPeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessPeriodKeySpecifier | (() => undefined | AccessPeriodKeySpecifier),
		fields?: AccessPeriodFieldPolicy,
	},
	AccessToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessTokenKeySpecifier | (() => undefined | AccessTokenKeySpecifier),
		fields?: AccessTokenFieldPolicy,
	},
	ActivateAccessCodePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateAccessCodePayloadKeySpecifier | (() => undefined | ActivateAccessCodePayloadKeySpecifier),
		fields?: ActivateAccessCodePayloadFieldPolicy,
	},
	ActivateBundlePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateBundlePayloadKeySpecifier | (() => undefined | ActivateBundlePayloadKeySpecifier),
		fields?: ActivateBundlePayloadFieldPolicy,
	},
	ActivateChallengePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateChallengePayloadKeySpecifier | (() => undefined | ActivateChallengePayloadKeySpecifier),
		fields?: ActivateChallengePayloadFieldPolicy,
	},
	ActivateFullAccessCodePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateFullAccessCodePayloadKeySpecifier | (() => undefined | ActivateFullAccessCodePayloadKeySpecifier),
		fields?: ActivateFullAccessCodePayloadFieldPolicy,
	},
	ActivateGenericProgramPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateGenericProgramPayloadKeySpecifier | (() => undefined | ActivateGenericProgramPayloadKeySpecifier),
		fields?: ActivateGenericProgramPayloadFieldPolicy,
	},
	ActivateLegacyPausaSmartPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateLegacyPausaSmartPayloadKeySpecifier | (() => undefined | ActivateLegacyPausaSmartPayloadKeySpecifier),
		fields?: ActivateLegacyPausaSmartPayloadFieldPolicy,
	},
	ActivateLiveEventPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateLiveEventPayloadKeySpecifier | (() => undefined | ActivateLiveEventPayloadKeySpecifier),
		fields?: ActivateLiveEventPayloadFieldPolicy,
	},
	ActivateOneTimeCodePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateOneTimeCodePayloadKeySpecifier | (() => undefined | ActivateOneTimeCodePayloadKeySpecifier),
		fields?: ActivateOneTimeCodePayloadFieldPolicy,
	},
	ActivatePausaSmartPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivatePausaSmartPayloadKeySpecifier | (() => undefined | ActivatePausaSmartPayloadKeySpecifier),
		fields?: ActivatePausaSmartPayloadFieldPolicy,
	},
	ActivatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivatePayloadKeySpecifier | (() => undefined | ActivatePayloadKeySpecifier),
		fields?: ActivatePayloadFieldPolicy,
	},
	ActivateTrialExtensionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateTrialExtensionPayloadKeySpecifier | (() => undefined | ActivateTrialExtensionPayloadKeySpecifier),
		fields?: ActivateTrialExtensionPayloadFieldPolicy,
	},
	AddAdyenPaymentMethodPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddAdyenPaymentMethodPayloadKeySpecifier | (() => undefined | AddAdyenPaymentMethodPayloadKeySpecifier),
		fields?: AddAdyenPaymentMethodPayloadFieldPolicy,
	},
	AddCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddCommentPayloadKeySpecifier | (() => undefined | AddCommentPayloadKeySpecifier),
		fields?: AddCommentPayloadFieldPolicy,
	},
	AddFavoritePlaylistPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddFavoritePlaylistPayloadKeySpecifier | (() => undefined | AddFavoritePlaylistPayloadKeySpecifier),
		fields?: AddFavoritePlaylistPayloadFieldPolicy,
	},
	AddFavoriteVideoPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddFavoriteVideoPayloadKeySpecifier | (() => undefined | AddFavoriteVideoPayloadKeySpecifier),
		fields?: AddFavoriteVideoPayloadFieldPolicy,
	},
	AddMoodTrackerAnswerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddMoodTrackerAnswerPayloadKeySpecifier | (() => undefined | AddMoodTrackerAnswerPayloadKeySpecifier),
		fields?: AddMoodTrackerAnswerPayloadFieldPolicy,
	},
	AddPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddPaymentKeySpecifier | (() => undefined | AddPaymentKeySpecifier),
		fields?: AddPaymentFieldPolicy,
	},
	AddPlaylistPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddPlaylistPayloadKeySpecifier | (() => undefined | AddPlaylistPayloadKeySpecifier),
		fields?: AddPlaylistPayloadFieldPolicy,
	},
	AddSearchResultPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddSearchResultPayloadKeySpecifier | (() => undefined | AddSearchResultPayloadKeySpecifier),
		fields?: AddSearchResultPayloadFieldPolicy,
	},
	AddStoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddStoryPayloadKeySpecifier | (() => undefined | AddStoryPayloadKeySpecifier),
		fields?: AddStoryPayloadFieldPolicy,
	},
	AddTrustlyPaymentMethodPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddTrustlyPaymentMethodPayloadKeySpecifier | (() => undefined | AddTrustlyPaymentMethodPayloadKeySpecifier),
		fields?: AddTrustlyPaymentMethodPayloadFieldPolicy,
	},
	AddUserFeedbackPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddUserFeedbackPayloadKeySpecifier | (() => undefined | AddUserFeedbackPayloadKeySpecifier),
		fields?: AddUserFeedbackPayloadFieldPolicy,
	},
	AddUserSchedulePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddUserSchedulePayloadKeySpecifier | (() => undefined | AddUserSchedulePayloadKeySpecifier),
		fields?: AddUserSchedulePayloadFieldPolicy,
	},
	AddVideoToPlaylistPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddVideoToPlaylistPayloadKeySpecifier | (() => undefined | AddVideoToPlaylistPayloadKeySpecifier),
		fields?: AddVideoToPlaylistPayloadFieldPolicy,
	},
	AddWaitingItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddWaitingItemPayloadKeySpecifier | (() => undefined | AddWaitingItemPayloadKeySpecifier),
		fields?: AddWaitingItemPayloadFieldPolicy,
	},
	AdyenAction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdyenActionKeySpecifier | (() => undefined | AdyenActionKeySpecifier),
		fields?: AdyenActionFieldPolicy,
	},
	AnswerSurveyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AnswerSurveyPayloadKeySpecifier | (() => undefined | AnswerSurveyPayloadKeySpecifier),
		fields?: AnswerSurveyPayloadFieldPolicy,
	},
	AppleSubscriptionPrecheck?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppleSubscriptionPrecheckKeySpecifier | (() => undefined | AppleSubscriptionPrecheckKeySpecifier),
		fields?: AppleSubscriptionPrecheckFieldPolicy,
	},
	Assets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetsKeySpecifier | (() => undefined | AssetsKeySpecifier),
		fields?: AssetsFieldPolicy,
	},
	AssignMobileDevicePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignMobileDevicePayloadKeySpecifier | (() => undefined | AssignMobileDevicePayloadKeySpecifier),
		fields?: AssignMobileDevicePayloadFieldPolicy,
	},
	AssignPlanToTrialPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignPlanToTrialPayloadKeySpecifier | (() => undefined | AssignPlanToTrialPayloadKeySpecifier),
		fields?: AssignPlanToTrialPayloadFieldPolicy,
	},
	AuthenticateUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticateUserPayloadKeySpecifier | (() => undefined | AuthenticateUserPayloadKeySpecifier),
		fields?: AuthenticateUserPayloadFieldPolicy,
	},
	Autocomplete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutocompleteKeySpecifier | (() => undefined | AutocompleteKeySpecifier),
		fields?: AutocompleteFieldPolicy,
	},
	AvailableSubscriptionPlan?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailableSubscriptionPlanKeySpecifier | (() => undefined | AvailableSubscriptionPlanKeySpecifier),
		fields?: AvailableSubscriptionPlanFieldPolicy,
	},
	BlogPost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlogPostKeySpecifier | (() => undefined | BlogPostKeySpecifier),
		fields?: BlogPostFieldPolicy,
	},
	Bundle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleKeySpecifier | (() => undefined | BundleKeySpecifier),
		fields?: BundleFieldPolicy,
	},
	BundleInfoPanel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleInfoPanelKeySpecifier | (() => undefined | BundleInfoPanelKeySpecifier),
		fields?: BundleInfoPanelFieldPolicy,
	},
	BundleInfoPanel2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleInfoPanel2KeySpecifier | (() => undefined | BundleInfoPanel2KeySpecifier),
		fields?: BundleInfoPanel2FieldPolicy,
	},
	BundleItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleItemKeySpecifier | (() => undefined | BundleItemKeySpecifier),
		fields?: BundleItemFieldPolicy,
	},
	BundleSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BundleSectionKeySpecifier | (() => undefined | BundleSectionKeySpecifier),
		fields?: BundleSectionFieldPolicy,
	},
	CampaignCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CampaignCodeKeySpecifier | (() => undefined | CampaignCodeKeySpecifier),
		fields?: CampaignCodeFieldPolicy,
	},
	CampaignSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CampaignSectionKeySpecifier | (() => undefined | CampaignSectionKeySpecifier),
		fields?: CampaignSectionFieldPolicy,
	},
	CancelSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CancelSubscriptionPayloadKeySpecifier | (() => undefined | CancelSubscriptionPayloadKeySpecifier),
		fields?: CancelSubscriptionPayloadFieldPolicy,
	},
	Challenge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChallengeKeySpecifier | (() => undefined | ChallengeKeySpecifier),
		fields?: ChallengeFieldPolicy,
	},
	ChallengeParticipant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChallengeParticipantKeySpecifier | (() => undefined | ChallengeParticipantKeySpecifier),
		fields?: ChallengeParticipantFieldPolicy,
	},
	ChallengePass?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChallengePassKeySpecifier | (() => undefined | ChallengePassKeySpecifier),
		fields?: ChallengePassFieldPolicy,
	},
	ChangeEmailPreferencePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangeEmailPreferencePayloadKeySpecifier | (() => undefined | ChangeEmailPreferencePayloadKeySpecifier),
		fields?: ChangeEmailPreferencePayloadFieldPolicy,
	},
	ChangePasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangePasswordPayloadKeySpecifier | (() => undefined | ChangePasswordPayloadKeySpecifier),
		fields?: ChangePasswordPayloadFieldPolicy,
	},
	ChangePreferencesPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangePreferencesPayloadKeySpecifier | (() => undefined | ChangePreferencesPayloadKeySpecifier),
		fields?: ChangePreferencesPayloadFieldPolicy,
	},
	ChangeProductEmailPreferencePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangeProductEmailPreferencePayloadKeySpecifier | (() => undefined | ChangeProductEmailPreferencePayloadKeySpecifier),
		fields?: ChangeProductEmailPreferencePayloadFieldPolicy,
	},
	ChangeProfileDataPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangeProfileDataPayloadKeySpecifier | (() => undefined | ChangeProfileDataPayloadKeySpecifier),
		fields?: ChangeProfileDataPayloadFieldPolicy,
	},
	ChangeProfileInfoPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangeProfileInfoPayloadKeySpecifier | (() => undefined | ChangeProfileInfoPayloadKeySpecifier),
		fields?: ChangeProfileInfoPayloadFieldPolicy,
	},
	ChangeProfilePrivacyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangeProfilePrivacyPayloadKeySpecifier | (() => undefined | ChangeProfilePrivacyPayloadKeySpecifier),
		fields?: ChangeProfilePrivacyPayloadFieldPolicy,
	},
	ClaimTrialPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClaimTrialPayloadKeySpecifier | (() => undefined | ClaimTrialPayloadKeySpecifier),
		fields?: ClaimTrialPayloadFieldPolicy,
	},
	Client?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientKeySpecifier | (() => undefined | ClientKeySpecifier),
		fields?: ClientFieldPolicy,
	},
	CodeDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeDetailsKeySpecifier | (() => undefined | CodeDetailsKeySpecifier),
		fields?: CodeDetailsFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CompleteProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompleteProfilePayloadKeySpecifier | (() => undefined | CompleteProfilePayloadKeySpecifier),
		fields?: CompleteProfilePayloadFieldPolicy,
	},
	ConfirmEmailPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfirmEmailPayloadKeySpecifier | (() => undefined | ConfirmEmailPayloadKeySpecifier),
		fields?: ConfirmEmailPayloadFieldPolicy,
	},
	Content?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentKeySpecifier | (() => undefined | ContentKeySpecifier),
		fields?: ContentFieldPolicy,
	},
	ContentAnswer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentAnswerKeySpecifier | (() => undefined | ContentAnswerKeySpecifier),
		fields?: ContentAnswerFieldPolicy,
	},
	Course?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseKeySpecifier | (() => undefined | CourseKeySpecifier),
		fields?: CourseFieldPolicy,
	},
	CourseAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseAccessKeySpecifier | (() => undefined | CourseAccessKeySpecifier),
		fields?: CourseAccessFieldPolicy,
	},
	CoursesSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoursesSectionKeySpecifier | (() => undefined | CoursesSectionKeySpecifier),
		fields?: CoursesSectionFieldPolicy,
	},
	CreateNewPasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateNewPasswordPayloadKeySpecifier | (() => undefined | CreateNewPasswordPayloadKeySpecifier),
		fields?: CreateNewPasswordPayloadFieldPolicy,
	},
	CtaSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CtaSectionKeySpecifier | (() => undefined | CtaSectionKeySpecifier),
		fields?: CtaSectionFieldPolicy,
	},
	CurrentUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentUserKeySpecifier | (() => undefined | CurrentUserKeySpecifier),
		fields?: CurrentUserFieldPolicy,
	},
	DeleteAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteAccountPayloadKeySpecifier | (() => undefined | DeleteAccountPayloadKeySpecifier),
		fields?: DeleteAccountPayloadFieldPolicy,
	},
	DeleteAvatarPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteAvatarPayloadKeySpecifier | (() => undefined | DeleteAvatarPayloadKeySpecifier),
		fields?: DeleteAvatarPayloadFieldPolicy,
	},
	DeleteFavoritePlaylistPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteFavoritePlaylistPayloadKeySpecifier | (() => undefined | DeleteFavoritePlaylistPayloadKeySpecifier),
		fields?: DeleteFavoritePlaylistPayloadFieldPolicy,
	},
	DeleteFavoriteVideoPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteFavoriteVideoPayloadKeySpecifier | (() => undefined | DeleteFavoriteVideoPayloadKeySpecifier),
		fields?: DeleteFavoriteVideoPayloadFieldPolicy,
	},
	DeletePaymentMethodPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePaymentMethodPayloadKeySpecifier | (() => undefined | DeletePaymentMethodPayloadKeySpecifier),
		fields?: DeletePaymentMethodPayloadFieldPolicy,
	},
	DeletePlaylistPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePlaylistPayloadKeySpecifier | (() => undefined | DeletePlaylistPayloadKeySpecifier),
		fields?: DeletePlaylistPayloadFieldPolicy,
	},
	Discount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountKeySpecifier | (() => undefined | DiscountKeySpecifier),
		fields?: DiscountFieldPolicy,
	},
	Document?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentKeySpecifier | (() => undefined | DocumentKeySpecifier),
		fields?: DocumentFieldPolicy,
	},
	Duration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DurationKeySpecifier | (() => undefined | DurationKeySpecifier),
		fields?: DurationFieldPolicy,
	},
	DurationDisplay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DurationDisplayKeySpecifier | (() => undefined | DurationDisplayKeySpecifier),
		fields?: DurationDisplayFieldPolicy,
	},
	Email?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailKeySpecifier | (() => undefined | EmailKeySpecifier),
		fields?: EmailFieldPolicy,
	},
	EmailPreference?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailPreferenceKeySpecifier | (() => undefined | EmailPreferenceKeySpecifier),
		fields?: EmailPreferenceFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	EventProxyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventProxyPayloadKeySpecifier | (() => undefined | EventProxyPayloadKeySpecifier),
		fields?: EventProxyPayloadFieldPolicy,
	},
	ExtraPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExtraPaymentKeySpecifier | (() => undefined | ExtraPaymentKeySpecifier),
		fields?: ExtraPaymentFieldPolicy,
	},
	FavoritePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FavoritePayloadKeySpecifier | (() => undefined | FavoritePayloadKeySpecifier),
		fields?: FavoritePayloadFieldPolicy,
	},
	Favorites?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FavoritesKeySpecifier | (() => undefined | FavoritesKeySpecifier),
		fields?: FavoritesFieldPolicy,
	},
	FeaturesSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeaturesSectionKeySpecifier | (() => undefined | FeaturesSectionKeySpecifier),
		fields?: FeaturesSectionFieldPolicy,
	},
	FlipperFlag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlipperFlagKeySpecifier | (() => undefined | FlipperFlagKeySpecifier),
		fields?: FlipperFlagFieldPolicy,
	},
	FormFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FormFieldsKeySpecifier | (() => undefined | FormFieldsKeySpecifier),
		fields?: FormFieldsFieldPolicy,
	},
	GenericProgram?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericProgramKeySpecifier | (() => undefined | GenericProgramKeySpecifier),
		fields?: GenericProgramFieldPolicy,
	},
	GenericProgramPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericProgramPaymentKeySpecifier | (() => undefined | GenericProgramPaymentKeySpecifier),
		fields?: GenericProgramPaymentFieldPolicy,
	},
	GenericProgramWithCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericProgramWithCodeKeySpecifier | (() => undefined | GenericProgramWithCodeKeySpecifier),
		fields?: GenericProgramWithCodeFieldPolicy,
	},
	GenresSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenresSectionKeySpecifier | (() => undefined | GenresSectionKeySpecifier),
		fields?: GenresSectionFieldPolicy,
	},
	HeroSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HeroSectionKeySpecifier | (() => undefined | HeroSectionKeySpecifier),
		fields?: HeroSectionFieldPolicy,
	},
	Instructor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InstructorKeySpecifier | (() => undefined | InstructorKeySpecifier),
		fields?: InstructorFieldPolicy,
	},
	InstructorAssets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InstructorAssetsKeySpecifier | (() => undefined | InstructorAssetsKeySpecifier),
		fields?: InstructorAssetsFieldPolicy,
	},
	InstructorInGenre?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InstructorInGenreKeySpecifier | (() => undefined | InstructorInGenreKeySpecifier),
		fields?: InstructorInGenreFieldPolicy,
	},
	Interest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InterestKeySpecifier | (() => undefined | InterestKeySpecifier),
		fields?: InterestFieldPolicy,
	},
	LinkToRecording?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkToRecordingKeySpecifier | (() => undefined | LinkToRecordingKeySpecifier),
		fields?: LinkToRecordingFieldPolicy,
	},
	LiveEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiveEventKeySpecifier | (() => undefined | LiveEventKeySpecifier),
		fields?: LiveEventFieldPolicy,
	},
	LiveEventAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiveEventAccessKeySpecifier | (() => undefined | LiveEventAccessKeySpecifier),
		fields?: LiveEventAccessFieldPolicy,
	},
	LiveEventCodes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiveEventCodesKeySpecifier | (() => undefined | LiveEventCodesKeySpecifier),
		fields?: LiveEventCodesFieldPolicy,
	},
	LiveEventPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiveEventPaymentKeySpecifier | (() => undefined | LiveEventPaymentKeySpecifier),
		fields?: LiveEventPaymentFieldPolicy,
	},
	LoginPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginPayloadKeySpecifier | (() => undefined | LoginPayloadKeySpecifier),
		fields?: LoginPayloadFieldPolicy,
	},
	LogoutPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogoutPayloadKeySpecifier | (() => undefined | LogoutPayloadKeySpecifier),
		fields?: LogoutPayloadFieldPolicy,
	},
	Meta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetaKeySpecifier | (() => undefined | MetaKeySpecifier),
		fields?: MetaFieldPolicy,
	},
	MetaSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetaSectionKeySpecifier | (() => undefined | MetaSectionKeySpecifier),
		fields?: MetaSectionFieldPolicy,
	},
	MobileAppSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MobileAppSectionKeySpecifier | (() => undefined | MobileAppSectionKeySpecifier),
		fields?: MobileAppSectionFieldPolicy,
	},
	MoodTracker?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoodTrackerKeySpecifier | (() => undefined | MoodTrackerKeySpecifier),
		fields?: MoodTrackerFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Need?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NeedKeySpecifier | (() => undefined | NeedKeySpecifier),
		fields?: NeedFieldPolicy,
	},
	NextBillingCycle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NextBillingCycleKeySpecifier | (() => undefined | NextBillingCycleKeySpecifier),
		fields?: NextBillingCycleFieldPolicy,
	},
	OnboardingChoices?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OnboardingChoicesKeySpecifier | (() => undefined | OnboardingChoicesKeySpecifier),
		fields?: OnboardingChoicesFieldPolicy,
	},
	Options?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OptionsKeySpecifier | (() => undefined | OptionsKeySpecifier),
		fields?: OptionsFieldPolicy,
	},
	OrderPaymentInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderPaymentInterfaceKeySpecifier | (() => undefined | OrderPaymentInterfaceKeySpecifier),
		fields?: OrderPaymentInterfaceFieldPolicy,
	},
	OtherFeaturesSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OtherFeaturesSectionKeySpecifier | (() => undefined | OtherFeaturesSectionKeySpecifier),
		fields?: OtherFeaturesSectionFieldPolicy,
	},
	OverviewPlaylist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OverviewPlaylistKeySpecifier | (() => undefined | OverviewPlaylistKeySpecifier),
		fields?: OverviewPlaylistFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageAssets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageAssetsKeySpecifier | (() => undefined | PageAssetsKeySpecifier),
		fields?: PageAssetsFieldPolicy,
	},
	PageContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageContentKeySpecifier | (() => undefined | PageContentKeySpecifier),
		fields?: PageContentFieldPolicy,
	},
	PageSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageSectionKeySpecifier | (() => undefined | PageSectionKeySpecifier),
		fields?: PageSectionFieldPolicy,
	},
	PagedBlogPosts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedBlogPostsKeySpecifier | (() => undefined | PagedBlogPostsKeySpecifier),
		fields?: PagedBlogPostsFieldPolicy,
	},
	PagedBundles?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedBundlesKeySpecifier | (() => undefined | PagedBundlesKeySpecifier),
		fields?: PagedBundlesFieldPolicy,
	},
	PagedGenericPrograms?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedGenericProgramsKeySpecifier | (() => undefined | PagedGenericProgramsKeySpecifier),
		fields?: PagedGenericProgramsFieldPolicy,
	},
	PagedInstructors?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedInstructorsKeySpecifier | (() => undefined | PagedInstructorsKeySpecifier),
		fields?: PagedInstructorsFieldPolicy,
	},
	PagedInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedInterfaceKeySpecifier | (() => undefined | PagedInterfaceKeySpecifier),
		fields?: PagedInterfaceFieldPolicy,
	},
	PagedLiveEvents?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedLiveEventsKeySpecifier | (() => undefined | PagedLiveEventsKeySpecifier),
		fields?: PagedLiveEventsFieldPolicy,
	},
	PagedPages?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedPagesKeySpecifier | (() => undefined | PagedPagesKeySpecifier),
		fields?: PagedPagesFieldPolicy,
	},
	PagedPlaylists?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedPlaylistsKeySpecifier | (() => undefined | PagedPlaylistsKeySpecifier),
		fields?: PagedPlaylistsFieldPolicy,
	},
	PagedSurveys?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedSurveysKeySpecifier | (() => undefined | PagedSurveysKeySpecifier),
		fields?: PagedSurveysFieldPolicy,
	},
	PagedUsers?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedUsersKeySpecifier | (() => undefined | PagedUsersKeySpecifier),
		fields?: PagedUsersFieldPolicy,
	},
	PagedVideos?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PagedVideosKeySpecifier | (() => undefined | PagedVideosKeySpecifier),
		fields?: PagedVideosFieldPolicy,
	},
	ParticipateInAnEventPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParticipateInAnEventPayloadKeySpecifier | (() => undefined | ParticipateInAnEventPayloadKeySpecifier),
		fields?: ParticipateInAnEventPayloadFieldPolicy,
	},
	PatchPlaylistPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PatchPlaylistPayloadKeySpecifier | (() => undefined | PatchPlaylistPayloadKeySpecifier),
		fields?: PatchPlaylistPayloadFieldPolicy,
	},
	PatchStoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PatchStoryPayloadKeySpecifier | (() => undefined | PatchStoryPayloadKeySpecifier),
		fields?: PatchStoryPayloadFieldPolicy,
	},
	PayForItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayForItemPayloadKeySpecifier | (() => undefined | PayForItemPayloadKeySpecifier),
		fields?: PayForItemPayloadFieldPolicy,
	},
	PayForVoucherPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayForVoucherPayloadKeySpecifier | (() => undefined | PayForVoucherPayloadKeySpecifier),
		fields?: PayForVoucherPayloadFieldPolicy,
	},
	Payment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentKeySpecifier | (() => undefined | PaymentKeySpecifier),
		fields?: PaymentFieldPolicy,
	},
	PaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentMethodKeySpecifier | (() => undefined | PaymentMethodKeySpecifier),
		fields?: PaymentMethodFieldPolicy,
	},
	PaymentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentResponseKeySpecifier | (() => undefined | PaymentResponseKeySpecifier),
		fields?: PaymentResponseFieldPolicy,
	},
	PhasedProgram?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhasedProgramKeySpecifier | (() => undefined | PhasedProgramKeySpecifier),
		fields?: PhasedProgramFieldPolicy,
	},
	PlayOverview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayOverviewKeySpecifier | (() => undefined | PlayOverviewKeySpecifier),
		fields?: PlayOverviewFieldPolicy,
	},
	Playlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaylistKeySpecifier | (() => undefined | PlaylistKeySpecifier),
		fields?: PlaylistFieldPolicy,
	},
	PlaylistAssets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaylistAssetsKeySpecifier | (() => undefined | PlaylistAssetsKeySpecifier),
		fields?: PlaylistAssetsFieldPolicy,
	},
	PlaylistStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaylistStatusKeySpecifier | (() => undefined | PlaylistStatusKeySpecifier),
		fields?: PlaylistStatusFieldPolicy,
	},
	Preferences?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreferencesKeySpecifier | (() => undefined | PreferencesKeySpecifier),
		fields?: PreferencesFieldPolicy,
	},
	Price?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceKeySpecifier | (() => undefined | PriceKeySpecifier),
		fields?: PriceFieldPolicy,
	},
	PrivacySettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PrivacySettingsKeySpecifier | (() => undefined | PrivacySettingsKeySpecifier),
		fields?: PrivacySettingsFieldPolicy,
	},
	ProcessingError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProcessingErrorKeySpecifier | (() => undefined | ProcessingErrorKeySpecifier),
		fields?: ProcessingErrorFieldPolicy,
	},
	Profile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileKeySpecifier | (() => undefined | ProfileKeySpecifier),
		fields?: ProfileFieldPolicy,
	},
	Program?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramKeySpecifier | (() => undefined | ProgramKeySpecifier),
		fields?: ProgramFieldPolicy,
	},
	ProgramAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramAccessKeySpecifier | (() => undefined | ProgramAccessKeySpecifier),
		fields?: ProgramAccessFieldPolicy,
	},
	ProgramActiveState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramActiveStateKeySpecifier | (() => undefined | ProgramActiveStateKeySpecifier),
		fields?: ProgramActiveStateFieldPolicy,
	},
	ProgramDocument?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramDocumentKeySpecifier | (() => undefined | ProgramDocumentKeySpecifier),
		fields?: ProgramDocumentFieldPolicy,
	},
	ProgramMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramMetaKeySpecifier | (() => undefined | ProgramMetaKeySpecifier),
		fields?: ProgramMetaFieldPolicy,
	},
	ProgramPartElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramPartElementKeySpecifier | (() => undefined | ProgramPartElementKeySpecifier),
		fields?: ProgramPartElementFieldPolicy,
	},
	ProgramPhase?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramPhaseKeySpecifier | (() => undefined | ProgramPhaseKeySpecifier),
		fields?: ProgramPhaseFieldPolicy,
	},
	ProgramSurvey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramSurveyKeySpecifier | (() => undefined | ProgramSurveyKeySpecifier),
		fields?: ProgramSurveyFieldPolicy,
	},
	ProgramSurveyCompletion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramSurveyCompletionKeySpecifier | (() => undefined | ProgramSurveyCompletionKeySpecifier),
		fields?: ProgramSurveyCompletionFieldPolicy,
	},
	ProgramSurveyElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramSurveyElementKeySpecifier | (() => undefined | ProgramSurveyElementKeySpecifier),
		fields?: ProgramSurveyElementFieldPolicy,
	},
	ProgramVideo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramVideoKeySpecifier | (() => undefined | ProgramVideoKeySpecifier),
		fields?: ProgramVideoFieldPolicy,
	},
	ProgramWeek?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramWeekKeySpecifier | (() => undefined | ProgramWeekKeySpecifier),
		fields?: ProgramWeekFieldPolicy,
	},
	ProgramsDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgramsDetailsKeySpecifier | (() => undefined | ProgramsDetailsKeySpecifier),
		fields?: ProgramsDetailsFieldPolicy,
	},
	PromotionCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PromotionCodeKeySpecifier | (() => undefined | PromotionCodeKeySpecifier),
		fields?: PromotionCodeFieldPolicy,
	},
	PromotionCodeUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PromotionCodeUserKeySpecifier | (() => undefined | PromotionCodeUserKeySpecifier),
		fields?: PromotionCodeUserFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Recommendations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecommendationsKeySpecifier | (() => undefined | RecommendationsKeySpecifier),
		fields?: RecommendationsFieldPolicy,
	},
	RegistrationDetail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegistrationDetailKeySpecifier | (() => undefined | RegistrationDetailKeySpecifier),
		fields?: RegistrationDetailFieldPolicy,
	},
	RegistrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegistrationPayloadKeySpecifier | (() => undefined | RegistrationPayloadKeySpecifier),
		fields?: RegistrationPayloadFieldPolicy,
	},
	RegistrationV2Payload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegistrationV2PayloadKeySpecifier | (() => undefined | RegistrationV2PayloadKeySpecifier),
		fields?: RegistrationV2PayloadFieldPolicy,
	},
	RemoveVideoFromPlaylistPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveVideoFromPlaylistPayloadKeySpecifier | (() => undefined | RemoveVideoFromPlaylistPayloadKeySpecifier),
		fields?: RemoveVideoFromPlaylistPayloadFieldPolicy,
	},
	ResendConfirmationEmailPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResendConfirmationEmailPayloadKeySpecifier | (() => undefined | ResendConfirmationEmailPayloadKeySpecifier),
		fields?: ResendConfirmationEmailPayloadFieldPolicy,
	},
	ResetEmailConfirmationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetEmailConfirmationPayloadKeySpecifier | (() => undefined | ResetEmailConfirmationPayloadKeySpecifier),
		fields?: ResetEmailConfirmationPayloadFieldPolicy,
	},
	ResetPasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordPayloadKeySpecifier | (() => undefined | ResetPasswordPayloadKeySpecifier),
		fields?: ResetPasswordPayloadFieldPolicy,
	},
	ResetSummerCampaignPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetSummerCampaignPayloadKeySpecifier | (() => undefined | ResetSummerCampaignPayloadKeySpecifier),
		fields?: ResetSummerCampaignPayloadFieldPolicy,
	},
	RestoreMobileSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RestoreMobileSubscriptionPayloadKeySpecifier | (() => undefined | RestoreMobileSubscriptionPayloadKeySpecifier),
		fields?: RestoreMobileSubscriptionPayloadFieldPolicy,
	},
	SaveOnboardingChoicesPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaveOnboardingChoicesPayloadKeySpecifier | (() => undefined | SaveOnboardingChoicesPayloadKeySpecifier),
		fields?: SaveOnboardingChoicesPayloadFieldPolicy,
	},
	SavePhasedProgramProgressPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SavePhasedProgramProgressPayloadKeySpecifier | (() => undefined | SavePhasedProgramProgressPayloadKeySpecifier),
		fields?: SavePhasedProgramProgressPayloadFieldPolicy,
	},
	SaveProgramProgressPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaveProgramProgressPayloadKeySpecifier | (() => undefined | SaveProgramProgressPayloadKeySpecifier),
		fields?: SaveProgramProgressPayloadFieldPolicy,
	},
	Search?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchKeySpecifier | (() => undefined | SearchKeySpecifier),
		fields?: SearchFieldPolicy,
	},
	SearchBlogPost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchBlogPostKeySpecifier | (() => undefined | SearchBlogPostKeySpecifier),
		fields?: SearchBlogPostFieldPolicy,
	},
	SearchEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchEventKeySpecifier | (() => undefined | SearchEventKeySpecifier),
		fields?: SearchEventFieldPolicy,
	},
	SearchGenericProgram?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchGenericProgramKeySpecifier | (() => undefined | SearchGenericProgramKeySpecifier),
		fields?: SearchGenericProgramFieldPolicy,
	},
	SearchInstructor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchInstructorKeySpecifier | (() => undefined | SearchInstructorKeySpecifier),
		fields?: SearchInstructorFieldPolicy,
	},
	SearchLandingPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchLandingPageKeySpecifier | (() => undefined | SearchLandingPageKeySpecifier),
		fields?: SearchLandingPageFieldPolicy,
	},
	SearchLiveEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchLiveEventKeySpecifier | (() => undefined | SearchLiveEventKeySpecifier),
		fields?: SearchLiveEventFieldPolicy,
	},
	SearchPlaylist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchPlaylistKeySpecifier | (() => undefined | SearchPlaylistKeySpecifier),
		fields?: SearchPlaylistFieldPolicy,
	},
	SearchResults?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultsKeySpecifier | (() => undefined | SearchResultsKeySpecifier),
		fields?: SearchResultsFieldPolicy,
	},
	SearchVideo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchVideoKeySpecifier | (() => undefined | SearchVideoKeySpecifier),
		fields?: SearchVideoFieldPolicy,
	},
	SignInPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SignInPayloadKeySpecifier | (() => undefined | SignInPayloadKeySpecifier),
		fields?: SignInPayloadFieldPolicy,
	},
	SignUpPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SignUpPayloadKeySpecifier | (() => undefined | SignUpPayloadKeySpecifier),
		fields?: SignUpPayloadFieldPolicy,
	},
	SpecialSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SpecialSectionKeySpecifier | (() => undefined | SpecialSectionKeySpecifier),
		fields?: SpecialSectionFieldPolicy,
	},
	SpecificSearch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SpecificSearchKeySpecifier | (() => undefined | SpecificSearchKeySpecifier),
		fields?: SpecificSearchFieldPolicy,
	},
	StartOverview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StartOverviewKeySpecifier | (() => undefined | StartOverviewKeySpecifier),
		fields?: StartOverviewFieldPolicy,
	},
	Statistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatisticsKeySpecifier | (() => undefined | StatisticsKeySpecifier),
		fields?: StatisticsFieldPolicy,
	},
	Stats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatsKeySpecifier | (() => undefined | StatsKeySpecifier),
		fields?: StatsFieldPolicy,
	},
	StoreAdyenDropinPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreAdyenDropinPayloadKeySpecifier | (() => undefined | StoreAdyenDropinPayloadKeySpecifier),
		fields?: StoreAdyenDropinPayloadFieldPolicy,
	},
	StorePaymentDetailsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StorePaymentDetailsPayloadKeySpecifier | (() => undefined | StorePaymentDetailsPayloadKeySpecifier),
		fields?: StorePaymentDetailsPayloadFieldPolicy,
	},
	StoreTransactionIdPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreTransactionIdPayloadKeySpecifier | (() => undefined | StoreTransactionIdPayloadKeySpecifier),
		fields?: StoreTransactionIdPayloadFieldPolicy,
	},
	StoreTrustlyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreTrustlyPayloadKeySpecifier | (() => undefined | StoreTrustlyPayloadKeySpecifier),
		fields?: StoreTrustlyPayloadFieldPolicy,
	},
	StoreUserDecisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreUserDecisionPayloadKeySpecifier | (() => undefined | StoreUserDecisionPayloadKeySpecifier),
		fields?: StoreUserDecisionPayloadFieldPolicy,
	},
	Story?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryKeySpecifier | (() => undefined | StoryKeySpecifier),
		fields?: StoryFieldPolicy,
	},
	SubmitInterestFormPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmitInterestFormPayloadKeySpecifier | (() => undefined | SubmitInterestFormPayloadKeySpecifier),
		fields?: SubmitInterestFormPayloadFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	SubscriptionPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionPaymentKeySpecifier | (() => undefined | SubscriptionPaymentKeySpecifier),
		fields?: SubscriptionPaymentFieldPolicy,
	},
	SubscriptionPlan?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionPlanKeySpecifier | (() => undefined | SubscriptionPlanKeySpecifier),
		fields?: SubscriptionPlanFieldPolicy,
	},
	Survey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyKeySpecifier | (() => undefined | SurveyKeySpecifier),
		fields?: SurveyFieldPolicy,
	},
	SurveyAnswer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyAnswerKeySpecifier | (() => undefined | SurveyAnswerKeySpecifier),
		fields?: SurveyAnswerFieldPolicy,
	},
	SurveyContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyContentKeySpecifier | (() => undefined | SurveyContentKeySpecifier),
		fields?: SurveyContentFieldPolicy,
	},
	SurveyOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyOptionsKeySpecifier | (() => undefined | SurveyOptionsKeySpecifier),
		fields?: SurveyOptionsFieldPolicy,
	},
	SurveyQuestion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyQuestionKeySpecifier | (() => undefined | SurveyQuestionKeySpecifier),
		fields?: SurveyQuestionFieldPolicy,
	},
	Taxonomy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyKeySpecifier | (() => undefined | TaxonomyKeySpecifier),
		fields?: TaxonomyFieldPolicy,
	},
	TaxonomyForLandingPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyForLandingPageKeySpecifier | (() => undefined | TaxonomyForLandingPageKeySpecifier),
		fields?: TaxonomyForLandingPageFieldPolicy,
	},
	TaxonomyItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyItemKeySpecifier | (() => undefined | TaxonomyItemKeySpecifier),
		fields?: TaxonomyItemFieldPolicy,
	},
	Term?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermKeySpecifier | (() => undefined | TermKeySpecifier),
		fields?: TermFieldPolicy,
	},
	Testimonial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestimonialKeySpecifier | (() => undefined | TestimonialKeySpecifier),
		fields?: TestimonialFieldPolicy,
	},
	Topic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicKeySpecifier | (() => undefined | TopicKeySpecifier),
		fields?: TopicFieldPolicy,
	},
	Trial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TrialKeySpecifier | (() => undefined | TrialKeySpecifier),
		fields?: TrialFieldPolicy,
	},
	TwentyThree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TwentyThreeKeySpecifier | (() => undefined | TwentyThreeKeySpecifier),
		fields?: TwentyThreeFieldPolicy,
	},
	UpdatePaymentMethodSettingsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePaymentMethodSettingsPayloadKeySpecifier | (() => undefined | UpdatePaymentMethodSettingsPayloadKeySpecifier),
		fields?: UpdatePaymentMethodSettingsPayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAccessKeySpecifier | (() => undefined | UserAccessKeySpecifier),
		fields?: UserAccessFieldPolicy,
	},
	UserInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserInterfaceKeySpecifier | (() => undefined | UserInterfaceKeySpecifier),
		fields?: UserInterfaceFieldPolicy,
	},
	UserSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSubscriptionKeySpecifier | (() => undefined | UserSubscriptionKeySpecifier),
		fields?: UserSubscriptionFieldPolicy,
	},
	ValidateCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateCodeKeySpecifier | (() => undefined | ValidateCodeKeySpecifier),
		fields?: ValidateCodeFieldPolicy,
	},
	ValidatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidatePayloadKeySpecifier | (() => undefined | ValidatePayloadKeySpecifier),
		fields?: ValidatePayloadFieldPolicy,
	},
	ValidateProgramCodePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateProgramCodePayloadKeySpecifier | (() => undefined | ValidateProgramCodePayloadKeySpecifier),
		fields?: ValidateProgramCodePayloadFieldPolicy,
	},
	ValidateTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateTokenPayloadKeySpecifier | (() => undefined | ValidateTokenPayloadKeySpecifier),
		fields?: ValidateTokenPayloadFieldPolicy,
	},
	ValidateTransfer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateTransferKeySpecifier | (() => undefined | ValidateTransferKeySpecifier),
		fields?: ValidateTransferFieldPolicy,
	},
	Video?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoKeySpecifier | (() => undefined | VideoKeySpecifier),
		fields?: VideoFieldPolicy,
	},
	VideoAssets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoAssetsKeySpecifier | (() => undefined | VideoAssetsKeySpecifier),
		fields?: VideoAssetsFieldPolicy,
	},
	VideoContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoContentKeySpecifier | (() => undefined | VideoContentKeySpecifier),
		fields?: VideoContentFieldPolicy,
	},
	VideoFileAsset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoFileAssetKeySpecifier | (() => undefined | VideoFileAssetKeySpecifier),
		fields?: VideoFileAssetFieldPolicy,
	},
	VideoInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoInfoKeySpecifier | (() => undefined | VideoInfoKeySpecifier),
		fields?: VideoInfoFieldPolicy,
	},
	VideoInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoInterfaceKeySpecifier | (() => undefined | VideoInterfaceKeySpecifier),
		fields?: VideoInterfaceFieldPolicy,
	},
	VideoMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoMetaKeySpecifier | (() => undefined | VideoMetaKeySpecifier),
		fields?: VideoMetaFieldPolicy,
	},
	VideoNote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideoNoteKeySpecifier | (() => undefined | VideoNoteKeySpecifier),
		fields?: VideoNoteFieldPolicy,
	},
	VideosCountByGenre?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideosCountByGenreKeySpecifier | (() => undefined | VideosCountByGenreKeySpecifier),
		fields?: VideosCountByGenreFieldPolicy,
	},
	VideosLibrarySection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideosLibrarySectionKeySpecifier | (() => undefined | VideosLibrarySectionKeySpecifier),
		fields?: VideosLibrarySectionFieldPolicy,
	},
	WaitingItemInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WaitingItemInfoKeySpecifier | (() => undefined | WaitingItemInfoKeySpecifier),
		fields?: WaitingItemInfoFieldPolicy,
	},
	WatchCompletedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WatchCompletedPayloadKeySpecifier | (() => undefined | WatchCompletedPayloadKeySpecifier),
		fields?: WatchCompletedPayloadFieldPolicy,
	},
	WatchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WatchPayloadKeySpecifier | (() => undefined | WatchPayloadKeySpecifier),
		fields?: WatchPayloadFieldPolicy,
	},
	WeeklyProgram?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WeeklyProgramKeySpecifier | (() => undefined | WeeklyProgramKeySpecifier),
		fields?: WeeklyProgramFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;